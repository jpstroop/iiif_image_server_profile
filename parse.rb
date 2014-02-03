require 'linkeddata'
graph = RDF::Graph.load("./profile_value_bool.json", format: :jsonld)
puts graph.dump(:ttl)
