{
  "@context": {
    "@vocab" : "http://iiif.io/api/image-api#",
    "xsd" : "http://www.w3.org/2001/XMLSchema#",
    "dc": "http://purl.org/dc/terms/",
    "DELETE" : { "@type" : "xsd:boolean" },
    "POST" : { "@type" : "xsd:boolean" },
    "PUT" : { "@type" : "xsd:boolean" },
    "feature01325" : { "@type" : "xsd:boolean" },
    "regionByPct" : { "@type" : "xsd:boolean" },
    "regionByPx" : { "@type" : "xsd:boolean" },
    "rotationArbitrary" : { "@type" : "xsd:boolean" },
    "rotationBy90s" : { "@type" : "xsd:boolean" },
    "sizeByForcedWH" : { "@type" : "xsd:boolean" },
    "sizeByH" : { "@type" : "xsd:boolean" },
    "sizeByPct" : { "@type" : "xsd:boolean" },
    "sizeByW" : { "@type" : "xsd:boolean" },
    "sizeByWH" : { "@type" : "xsd:boolean" }
  },
  "@graph": [
    {
      "@id" : "http://libimages.princeton.edu/loris",
      "contact" : "mailto:azaroth42@gmail.com",
      "regionByPct" : "true",
      "regionByPct" : "true",
      "regionByPx" : "true",
      "regionByPx" : "true",
      "rotationArbitrary" : "true",
      "rotationArbitrary" : "true",
      "rotationBy90s" : "true",
      "rotationBy90s" : "true",
      "sizeByForcedWH" : "true",
      "sizeByH" : "true",
      "sizeByPct" : "true",  
      "sizeByW" : "true",
      "sizeByWH" : "true"
    },
    {
      "@id": "loris:myCoolFeature",
      "@type": "Extension",
      "dc:description": "It slices, it dices!"
    },
    {
      "@id": "loris:myNextCoolFeature",
      "@type": "Extension",
      "dc:description": "It even does the dishes"
    }
  ]
}
