class ApplicationController < ActionController::Base
  protect_from_forgery if: -> { false }
end
