ol.proj.get("EPSG:4326").setExtent([-94.112517, -19.087793, -55.551054, 1.820213]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain background',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://stamen-tiles-{a-c}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'})]
    })
})
]
});

        var lyr_GooglePhysical_0 = new ol.layer.Tile({
            'title': 'GooglePhysical_0',
            'type': 'base',
            'opacity': 0.796078,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}&s=Ga'
            })
        });var format_Regionalizacin_1 = new ol.format.GeoJSON();
var features_Regionalizacin_1 = format_Regionalizacin_1.readFeatures(json_Regionalizacin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Regionalizacin_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Regionalizacin_1.addFeatures(features_Regionalizacin_1);var lyr_Regionalizacin_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Regionalizacin_1, 
                style: style_Regionalizacin_1,
                title: '<img src="styles/legend/Regionalizacin_1.png" /> Regionalización'
            });var format_Calibracin_2 = new ol.format.GeoJSON();
var features_Calibracin_2 = format_Calibracin_2.readFeatures(json_Calibracin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Calibracin_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Calibracin_2.addFeatures(features_Calibracin_2);var lyr_Calibracin_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Calibracin_2, 
                style: style_Calibracin_2,
                title: '<img src="styles/legend/Calibracin_2.png" /> Calibración'
            });var format_Vertientes_3 = new ol.format.GeoJSON();
var features_Vertientes_3 = format_Vertientes_3.readFeatures(json_Vertientes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Vertientes_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vertientes_3.addFeatures(features_Vertientes_3);var lyr_Vertientes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vertientes_3, 
                style: style_Vertientes_3,
                title: '<img src="styles/legend/Vertientes_3.png" /> Vertientes'
            });var format_Subcuencas_4 = new ol.format.GeoJSON();
var features_Subcuencas_4 = format_Subcuencas_4.readFeatures(json_Subcuencas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Subcuencas_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Subcuencas_4.addFeatures(features_Subcuencas_4);var lyr_Subcuencas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Subcuencas_4, 
                style: style_Subcuencas_4,
                title: '<img src="styles/legend/Subcuencas_4.png" /> Subcuencas'
            });var format_Rios_5 = new ol.format.GeoJSON();
var features_Rios_5 = format_Rios_5.readFeatures(json_Rios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rios_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Rios_5.addFeatures(features_Rios_5);var lyr_Rios_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rios_5, 
                style: style_Rios_5,
                title: '<img src="styles/legend/Rios_5.png" /> Rios'
            });var format_Estaciones_6 = new ol.format.GeoJSON();
var features_Estaciones_6 = format_Estaciones_6.readFeatures(json_Estaciones_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Estaciones_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Estaciones_6.addFeatures(features_Estaciones_6);var lyr_Estaciones_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estaciones_6, 
                style: style_Estaciones_6,
                title: '<img src="styles/legend/Estaciones_6.png" /> Estaciones'
            });

lyr_GooglePhysical_0.setVisible(true);lyr_Regionalizacin_1.setVisible(false);lyr_Calibracin_2.setVisible(false);lyr_Vertientes_3.setVisible(false);lyr_Subcuencas_4.setVisible(false);lyr_Rios_5.setVisible(true);lyr_Estaciones_6.setVisible(true);
var layersList = [baseLayer,lyr_GooglePhysical_0,lyr_Regionalizacin_1,lyr_Calibracin_2,lyr_Vertientes_3,lyr_Subcuencas_4,lyr_Rios_5,lyr_Estaciones_6];
lyr_Regionalizacin_1.set('fieldAliases', {'Slope': 'Slope', });
lyr_Calibracin_2.set('fieldAliases', {'Outlet': 'Outlet', 'Slope': 'Slope', 'Area': 'Area', });
lyr_Vertientes_3.set('fieldAliases', {'Slope': 'Slope', });
lyr_Subcuencas_4.set('fieldAliases', {'COMID': 'COMID', 'Slope': 'Slope', 'Area': 'Area', 'Database': 'Database', });
lyr_Rios_5.set('fieldAliases', {'COMID': 'COMID', 'Database': 'Database', });
lyr_Estaciones_6.set('fieldAliases', {'Name': 'Name', 'Abrev': 'Abrev', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Watershed': 'Watershed', 'Slope': 'Slope', });
lyr_Regionalizacin_1.set('fieldImages', {'Slope': 'TextEdit', });
lyr_Calibracin_2.set('fieldImages', {'Outlet': 'TextEdit', 'Slope': 'TextEdit', 'Area': 'TextEdit', });
lyr_Vertientes_3.set('fieldImages', {'Slope': 'TextEdit', });
lyr_Subcuencas_4.set('fieldImages', {'COMID': 'TextEdit', 'Slope': 'TextEdit', 'Area': 'TextEdit', 'Database': 'TextEdit', });
lyr_Rios_5.set('fieldImages', {'COMID': 'TextEdit', 'Database': 'TextEdit', });
lyr_Estaciones_6.set('fieldImages', {'Name': 'TextEdit', 'Abrev': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Watershed': 'TextEdit', 'Slope': 'TextEdit', });
lyr_Regionalizacin_1.set('fieldLabels', {'Slope': 'no label', });
lyr_Calibracin_2.set('fieldLabels', {'Outlet': 'inline label', 'Slope': 'inline label', 'Area': 'inline label', });
lyr_Vertientes_3.set('fieldLabels', {'Slope': 'inline label', });
lyr_Subcuencas_4.set('fieldLabels', {'COMID': 'inline label', 'Slope': 'inline label', 'Area': 'inline label', 'Database': 'inline label', });
lyr_Rios_5.set('fieldLabels', {'COMID': 'inline label', 'Database': 'inline label', });
lyr_Estaciones_6.set('fieldLabels', {'Name': 'inline label', 'Abrev': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Watershed': 'inline label', 'Slope': 'inline label', });
lyr_Estaciones_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});