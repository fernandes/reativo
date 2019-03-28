module Reativo
  class JsGenerator < Rails::Generators::NamedBase
    source_root File.expand_path('templates', __dir__)
    argument :model_name, required: true
    class_option :actions, type: :array, default: []
    class_option :properties, type: :array, default: [], aliases: ['--props']

    desc <<-DESC.strip_heredoc
    Description:
        Generate the JS files for a crud

    Example:
        If you don't specify some actions, default is create for all

        rails g reativo Admin::Todos Todo --properties title completed

        This will create:
            app/javascript/components/admin/todos/Index.js
            app/javascript/components/admin/todos/New.js
            app/javascript/components/admin/todos/Show.js
            app/javascript/components/admin/todos/Edit.js
            app/javascript/components/admin/todos/Form.js

    Example:
        rails g reativo:js Admin::Todos --properties title completed --actions index

        This will create:
            app/javascript/components/admin/todos/Index.js
    DESC

    def generate_operations
      needs_form = false
      actions = options['actions'].empty? ? ['index', 'new', 'show', 'edit'] : options['actions']

      actions.each do |action|
        template "component/#{action.capitalize}.js", component_path(action)
        if needs_form?(action)
          needs_form = true
        end
      end

      if needs_form
        template "component/Form.js", component_path("Form")
      end
    end

    private
      def needs_form?(action)
        return true if action == "new"
        return true if action == "edit"
        false
      end

      def component_path(action)
        "app/javascript/components/#{class_name.underscore}/#{action.capitalize}.js"
      end

      def collection_path
        class_name.underscore
      end

      def element_path
        class_name.singularize.underscore
      end

      def model_name_singular
        model_name.demodulize.singularize
      end

      def model_name_plural
        model_name.demodulize.pluralize
      end

      def js_properties
        options[:properties].join(", ")
      end
  end
end
