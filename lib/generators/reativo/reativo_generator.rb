class ReativoGenerator < Rails::Generators::NamedBase
  MAP = {
    index:   { operation: true, contract: false, representer: true},
    create:  { operation: true, contract: true,  representer: true},
    show:    { operation: true, contract: false, representer: false},
    update:  { operation: true, contract: true,  representer: true},
    destroy: { operation: true, contract: false, representer: false},
  }

  source_root File.expand_path('templates', __dir__)
  argument :model_name, required: true
  class_option :view_model, type: :boolean, default: false, aliases: ['-v']
  class_option :crud, type: :boolean, default: false, aliases: ['-c']
  class_option :actions, type: :array, default: []
  class_option :properties, type: :array, default: [], aliases: ['--props']

  def generate_operations
    representer_module = false
    actions = options['actions'] || []

    actions = ['index', 'create', 'show', 'update', 'destroy'] if options[:crud]

    actions.each do |action|
      template "operation/#{action}.erb", concept_path("operation", action) if has_operation?(action)
      template "contract/#{action}.erb", concept_path("contract", action) if has_contract?(action)
      if has_representer?(action)
        template "representer/#{action}.erb", concept_path("representer", action)
        representer_module = true
      end
    end

    if representer_module
      template "representer/module.erb", concept_path("representer", "#{model_name.underscore}_module")
    end
  end

  private
    def property_attribute(property)
      return "property :#{property}"
    end

    def properties_symbols(include_id:)
      args = options[:properties].dup
      args.prepend(:id) if include_id
      args.map { |x| ":#{x}" }.join(", ")
    end

    def concept_path(operation, action)
      "app/concepts/#{class_name.underscore}/#{operation}/#{action}.rb"
    end

    def has_operation?(action)
      MAP.dig(action.to_sym, :operation) || false
    end

    def has_contract?(action)
      MAP.dig(action.to_sym, :contract) || false
    end

    def has_representer?(action)
      MAP.dig(action.to_sym, :representer) || false
    end
end
