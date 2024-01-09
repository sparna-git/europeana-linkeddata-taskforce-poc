var sampleQueries = {
	"example.1" :
{
  "distinct": true,
  "variables": [
    "CulturalHeritageObject",
    "URL"
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?CulturalHeritageObject",
        "p": "http://purl.org/dc/elements/1.1/subject",
        "o": "?Concept_2",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://www.w3.org/2004/02/skos/core#Concept",
        "values": [
          {
            "label": "Hollandia (schip)",
            "rdfTerm": {
              "type": "literal",
              "xml:lang": "nl",
              "value": "Hollandia (schip)"
            }
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?CulturalHeritageObject",
        "p": "http://www.europeana.eu/schemas/edm/type",
        "o": "?Type_4",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Type",
        "values": [
          {
            "label": "IMAGE",
            "rdfTerm": {
              "type": "literal",
              "value": "IMAGE"
            }
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?CulturalHeritageObject",
        "p": "http://www.europeana.eu/schemas/edm/hasView",
        "o": "?URL",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://www.europeana.eu/schemas/edm/WebResource",
        "values": []
      },
      "children": []
    }
  ]
}
,
	"example.2" :
{
  "distinct": true,
  "variables": [
    "culturalObject",
    "URL",
    "license",
    "spatial"
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?culturalObject",
        "p": "http://purl.org/dc/elements/1.1/title",
        "o": "?Title_2",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Title",
        "values": [
          {
            "label": "interieur",
            "regex": "interieur"
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?culturalObject",
        "p": "http://www.europeana.eu/schemas/edm/hasView",
        "o": "?URL",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://www.europeana.eu/schemas/edm/WebResource",
        "values": []
      },
      "children": []
    },
    {
      "line": {
        "s": "?culturalObject",
        "p": "http://www.europeana.eu/schemas/edm/rights",
        "o": "?license",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://creativecommons.org/ns#License",
        "values": []
      },
      "children": []
    },
    {
      "line": {
        "s": "?culturalObject",
        "p": "http://purl.org/dc/terms/spatial",
        "o": "?spatial",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Coverage",
        "values": []
      },
      "children": [],
      "optional": true
    }
  ]
},

  "example.3" :
{
  "distinct": true,
  "variables": [
    "ProvidedCHO_1",
    "identifier",
    "title",
    "dataProvider",
    "aggregator",
    "contributor",
    "creator",
    "publisher",
    "url",
    "license",
    "type",
    "edmType",
    "format",
    "extent",
    "provenance",
    "description",
    "rights"
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://www.europeana.eu/schemas/edm/dataProvider",
        "o": "?dataProvider",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://www.europeana.eu/schemas/edm/Agent",
        "values": [
          {
            "label": "Museumpark Orientalis",
            "rdfTerm": {
              "type": "literal",
              "value": "Museumpark Orientalis"
            }
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/elements/1.1/title",
        "o": "?title",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Title",
        "values": []
      },
      "children": []
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://www.europeana.eu/schemas/edm/provider",
        "o": "?aggregator",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://www.europeana.eu/schemas/edm/Agent",
        "values": []
      },
      "children": []
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/elements/1.1/contributor",
        "o": "?contributor",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://www.europeana.eu/schemas/edm/Agent",
        "values": []
      },
      "children": [],
      "optional": true
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/elements/1.1/creator",
        "o": "?creator",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://www.europeana.eu/schemas/edm/Agent",
        "values": []
      },
      "children": [],
      "optional": true
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/elements/1.1/publisher",
        "o": "?publisher",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://www.europeana.eu/schemas/edm/Agent",
        "values": []
      },
      "children": [],
      "optional": true
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://www.europeana.eu/schemas/edm/hasView",
        "o": "?url",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://www.europeana.eu/schemas/edm/WebResource",
        "values": []
      },
      "children": [],
      "optional": true
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://www.europeana.eu/schemas/edm/rights",
        "o": "?license",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://creativecommons.org/ns#License",
        "values": []
      },
      "children": [],
      "optional": true
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/elements/1.1/type",
        "o": "?type",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Type",
        "values": []
      },
      "children": [],
      "optional": true
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://www.europeana.eu/schemas/edm/type",
        "o": "?edmType",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Type",
        "values": []
      },
      "children": [],
      "optional": true
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/elements/1.1/format",
        "o": "?format",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Format",
        "values": []
      },
      "children": [],
      "optional": true
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/terms/extent",
        "o": "?extent",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Extent",
        "values": []
      },
      "children": [],
      "optional": true
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/terms/provenance",
        "o": "?provenance",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Provenance",
        "values": []
      },
      "children": [],
      "optional": true
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/elements/1.1/description",
        "o": "?description",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Description",
        "values": []
      },
      "children": [],
      "optional": true
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/elements/1.1/identifier",
        "o": "?identifier",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Identifier",
        "values": []
      },
      "children": [],
      "optional": true
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/elements/1.1/rights",
        "o": "?rights",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Rights",
        "values": []
      },
      "children": [],
      "optional": true
    }
  ]
}
};