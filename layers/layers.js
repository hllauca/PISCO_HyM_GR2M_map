ol.proj.get("EPSG:4326").setExtent([-93.637186, -19.031404, -56.513017, 1.437579]);
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
var format_Cuencas_0 = new ol.format.GeoJSON();
var features_Cuencas_0 = format_Cuencas_0.readFeatures(json_Cuencas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Cuencas_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Cuencas_0.addFeatures(features_Cuencas_0);var lyr_Cuencas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuencas_0, 
                style: style_Cuencas_0,
                title: '<img src="styles/legend/Cuencas_0.png" /> Cuencas'
            });var format_Subcuencas_1 = new ol.format.GeoJSON();
var features_Subcuencas_1 = format_Subcuencas_1.readFeatures(json_Subcuencas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Subcuencas_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Subcuencas_1.addFeatures(features_Subcuencas_1);var lyr_Subcuencas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Subcuencas_1, 
                style: style_Subcuencas_1,
                title: '<img src="styles/legend/Subcuencas_1.png" /> Subcuencas'
            });var format_Rios_2 = new ol.format.GeoJSON();
var features_Rios_2 = format_Rios_2.readFeatures(json_Rios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rios_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Rios_2.addFeatures(features_Rios_2);var lyr_Rios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rios_2, 
                style: style_Rios_2,
                title: '<img src="styles/legend/Rios_2.png" /> Rios'
            });var format_Estaciones_3 = new ol.format.GeoJSON();
var features_Estaciones_3 = format_Estaciones_3.readFeatures(json_Estaciones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Estaciones_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Estaciones_3.addFeatures(features_Estaciones_3);var lyr_Estaciones_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estaciones_3, 
                style: style_Estaciones_3,
                title: '<img src="styles/legend/Estaciones_3.png" /> Estaciones'
            });

lyr_Cuencas_0.setVisible(false);lyr_Subcuencas_1.setVisible(false);lyr_Rios_2.setVisible(true);lyr_Estaciones_3.setVisible(true);
var layersList = [baseLayer,lyr_Cuencas_0,lyr_Subcuencas_1,lyr_Rios_2,lyr_Estaciones_3];
lyr_Cuencas_0.set('fieldAliases', {'Outlet': 'Outlet', 'Slope': 'Slope', 'Area': 'Area', });
lyr_Subcuencas_1.set('fieldAliases', {'COMID': 'COMID', 'Slope': 'Slope', 'Area': 'Area', });
lyr_Rios_2.set('fieldAliases', {'COMID': 'COMID', });
lyr_Estaciones_3.set('fieldAliases', {'Name': 'Name', 'Abrev': 'Abrev', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Watershed': 'Watershed', 'Slope': 'Slope', });
lyr_Cuencas_0.set('fieldImages', {'Outlet': 'TextEdit', 'Slope': 'TextEdit', 'Area': 'TextEdit', });
lyr_Subcuencas_1.set('fieldImages', {'COMID': 'TextEdit', 'Slope': 'TextEdit', 'Area': 'TextEdit', });
lyr_Rios_2.set('fieldImages', {'COMID': 'TextEdit', });
lyr_Estaciones_3.set('fieldImages', {'Name': 'TextEdit', 'Abrev': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Watershed': 'TextEdit', 'Slope': 'TextEdit', });
lyr_Cuencas_0.set('fieldLabels', {'Outlet': 'inline label', 'Slope': 'inline label', 'Area': 'inline label', });
lyr_Subcuencas_1.set('fieldLabels', {'COMID': 'inline label', 'Slope': 'inline label', 'Area': 'inline label', });
lyr_Rios_2.set('fieldLabels', {'COMID': 'inline label', });
lyr_Estaciones_3.set('fieldLabels', {'Name': 'inline label', 'Abrev': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Watershed': 'inline label', 'Slope': 'inline label', });
lyr_Estaciones_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});