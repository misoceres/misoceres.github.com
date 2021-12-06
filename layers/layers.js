var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Ubicacion_LANcenter1_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ubicacion_LANcenter1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ubicacion_LANcenter1_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7472554.412379, -2036281.756452, -7468750.465073, -2031848.982416]
                            })
                        });
var lyr_Reclass_Edu_Sup_Or1_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Reclass_Edu_Sup_Or1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Reclass_Edu_Sup_Or1_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7473574.083843, -2036322.038931, -7468747.687589, -2030554.392588]
                            })
                        });
var lyr_Reclass_LAN_Or1_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Reclass_LAN_Or1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Reclass_LAN_Or1_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7472554.483666, -2036281.756452, -7468398.347201, -2031838.229275]
                            })
                        });
var lyr_Reclass_Fibra_Entel_Or1_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Reclass_Fibra_Entel_Or1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Reclass_Fibra_Entel_Or1_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7478620.174450, -2043580.595894, -7464586.957231, -2022359.386489]
                            })
                        });
var lyr_Reclass_REsccuelas_Or_Centro1_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Reclass_REsccuelas_Or_Centro1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Reclass_REsccuelas_Or_Centro1_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7474054.935249, -2037079.688890, -7467163.170630, -2030118.722823]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Ubicacion_LANcenter1_1.setVisible(true);lyr_Reclass_Edu_Sup_Or1_2.setVisible(true);lyr_Reclass_LAN_Or1_3.setVisible(true);lyr_Reclass_Fibra_Entel_Or1_4.setVisible(true);lyr_Reclass_REsccuelas_Or_Centro1_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Ubicacion_LANcenter1_1,lyr_Reclass_Edu_Sup_Or1_2,lyr_Reclass_LAN_Or1_3,lyr_Reclass_Fibra_Entel_Or1_4,lyr_Reclass_REsccuelas_Or_Centro1_5];
