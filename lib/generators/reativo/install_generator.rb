module Reativo
  class InstallGenerator < Rails::Generators::Base
    source_root File.expand_path('templates', __dir__)

    desc <<-DESC.strip_heredoc
    Description:
        Reativo install, make it running, fast!

    Example:
        rails g reativo:install

        This will create:
            - theme cell and layout
            - theme js components (Baseline, Drawer, MainBar, Menu, Snackbar)
            - support files (theme and store example)
        
        Also appends the initial setup to `application` pack

    DESC

    def install
      append_to_file 'app/javascript/packs/application.js' do <<~'RUBY'
        import store from '../store'
        window.store = store
        
        import theme from '../theme'

        import { setTheme } from 'reativo'
        setTheme(theme)
      RUBY
      end

      template "theme/layout.rb", 'app/concepts/theme/cell/layout.rb'
      copy_file "theme/layout.erb", 'app/concepts/theme/view/layout.erb'

      copy_component("Baseline")
      copy_component("Drawer")
      copy_component("MainBar")
      copy_component("Menu")
      copy_component("Snackbar")

      copy_support("theme")
      copy_support("store")
    end

    private
      def copy_component(name)
        copy_file "theme/#{name}.js", "app/javascript/components/theme/#{name}.js"
      end

      def copy_support(name)
        copy_file "support/#{name}.js", "app/javascript/#{name}/index.js"
      end
  end
end
