var object = {
  ymaps: {
    xmlns: 'http://maps.yandex.ru/ymaps/1.x',
    xmlsis: 'http://www.w3.org/2001/XMLSchema-instance',
    GeoObjectCollection: {
      metaDataProperty: {
        xmlns: 'http://www.opengis.net/gml',
        GeocoderResponseMetaData: {
          xmlns: 'http://maps.yandex.ru/geocoder/1.x',
          request: '40.714224,-73.961452',
          found: '1',
          results: '10',
          Point: {
            xmlns: 'http://www.opengis.net/gml',
            pos: '40.714224 -73.961452'
          }
        }
      },
      featureMember: {
        xmlns: 'http://www.opengis.net/gml',
        GeoObject: {
          xmlns: 'http://maps.yandex.ru/ymaps/1.x',
          'xmlns:gml': 'http://www.opengis.net/gml',
          'gml:id': '1',
          metaDataProperty: {
            xmlns: 'http://www.opengis.net/gml',
            GeocoderMetaData: {
              xmlns: 'http://maps.yandex.ru/geocoder/1.x',
              kind: 'country',
              text: 'Антарктида',
              precision: 'other',
              Address: {
                xmlns: 'http://maps.yandex.ru/address/1.x',
                country_code: 'AQ',
                formatted: {},
                Component: {
                  kind: 'country',
                  name: 'Антарктида'
                }
              },
              AddressDetails: {
                xmlns: 'urn:oasis:names:tc:ciq:xsdschema:xAL:2.0',
                Country: {
                  AddressLine: {},
                  CountryNameCode: 'AQ',
                  CountryName: 'Антарктида'
                }
              }
            }
          },
          name: {
            xmlns: 'http://www.opengis.net/gml',
            $t: 'Антарктида'
          },
          boundedBy: {
            xmlns: 'http://www.opengis.net/gml',
            Envelope: {
              lowerCorner: '-179.999988 -85',
              upperCorner: '179.999988 -31.548484'
            }
          },
          Point: {
            xmlns: 'http://www.opengis.net/gml',
            pos: '23.626177 -79.935255'
          }
        }
      }
    }
  }
}
