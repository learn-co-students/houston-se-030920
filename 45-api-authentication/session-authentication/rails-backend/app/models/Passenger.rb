class Passenger < ActiveRecord::Base
    has_many(:tickets)
    has_secure_password
end