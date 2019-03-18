module Reativo
  class CrudController < ::Reativo::ApplicationController
    def index
      run index_op

      respond_to do |format|
        format.html { component(index_compo, model: result[:model]) }
        format.json {
          json = Rails.cache.fetch("api/#{result[:cache_key]}", expires_in: 12.hours) do
            result[:model].extend(result['representer.render.class']).to_json
          end
          render json: json
        }
      end
    end

    def show
      run show_op
      respond_to do |format|
        decorated_model = result[:model] ? result[:model].extend(result['representer.render.class']) : nil
        format.html { component(show_compo, model: (decorated_model ? decorated_model.to_hash : nil)) }
        format.json {
          json = Rails.cache.fetch("api/#{result[:cache_key]}", expires_in: 12.hours) do
            decorated_model ? decorated_model.to_json : nil
          end
          render json: json
        }
      end
    end

    def new
      respond_to do |format|
        format.html { component(new_compo) }
      end
    end

    def edit
      run edit_op

      decorated_model = result[:model] ? result[:model].extend(result['representer.render.class']) : nil
      component(edit_compo, model: decorated_model ? decorated_model.to_hash : nil)
    end

    def create
      run create_op

      respond_to do |format|
        if result.success?
          flash[:notice] = "#{model_name} was successfully created."
          format.html { redirect_to result[:model], notice: "#{model_name} was successfully created." }
          format.json { render json: result[:model].extend(result['representer.render.class']).to_json, status: :created }
        else
          format.html { component(new_compo) }
          format.json { render json: result[:model].errors, status: :unprocessable_entity }
        end
      end
    end

    def update
      run update_op

      respond_to do |format|
        if result.success?
          format.html { redirect_to result[:model], notice: "#{model_name} was successfully updated." }
          format.json { render json: result[:model].extend(result['representer.render.class']).to_json }
        else
          format.html {
            decorated_model = result[:model] ? result[:model].extend(result['representer.render.class']) : nil
            component(edit_compo, model: decorated_model ? decorated_model.to_hash : nil)
          }
          format.json { render json: result["representer.errors.class"].new(result["result.contract.default"].errors.messages).to_json, status: :unprocessable_entity }
        end
      end
    end

    def destroy
      run destroy_op

      respond_to do |format|
        format.html { redirect_to send("#{collection_name.underscore}_url".to_sym), notice: "#{model_name} was successfully destroyed." }
        format.json { head :no_content }
      end
    end

    private
      def result
        @_result
      end

      def index_op
        action_op('index')
      end
    
      def index_compo
        action_compo('index')
      end
    
      def show_op
        action_op('show')
      end
    
      def show_compo
        action_compo('show')
      end
    
      def create_op
        action_op('create')
      end
    
      def new_compo
        action_compo('new')
      end
    
      def edit_op
        action_op("edit")
      end
    
      def edit_compo
        action_compo('edit')
      end
    
      def update_op
        action_op('update')
      end
      
      def destroy_op
        action_op('destroy')
      end
    
      def action_op(action)
        "#{collection_name}::Operation::#{action.camelize}".constantize
      end
    
      def action_compo(action)
        "#{collection_name.underscore}/#{action.camelize}"
      end
    
      def model_name
        collection_name.singularize
      end
    
      def collection_name
        self.class.to_s.gsub!(/Controller$/, '')
      end
  end
end