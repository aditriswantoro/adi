var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.format.GeoJSON();
var features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.readFeatures(json_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.addFeatures(features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0);var lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
                style: style_LapakGIScomBatas_Kecamatan_BIG_PPBW_0,
    title: '[LapakGIS.com] Batas_Kecamatan_BIG_PPBW<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_0.png" /> sangat rendah<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_1.png" /> rendah<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_2.png" /> tinggi<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_3.png" /> sangat tinggi<br />'
        });var format_sekolahdemak_1 = new ol.format.GeoJSON();
var features_sekolahdemak_1 = format_sekolahdemak_1.readFeatures(json_sekolahdemak_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sekolahdemak_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_sekolahdemak_1.addFeatures(features_sekolahdemak_1);var lyr_sekolahdemak_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sekolahdemak_1, 
                style: style_sekolahdemak_1,
                title: '<img src="styles/legend/sekolahdemak_1.png" /> sekolah demak'
            });

lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.setVisible(true);lyr_sekolahdemak_1.setVisible(true);
var layersList = [baseLayer,lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0,lyr_sekolahdemak_1];
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Jumlah': 'Jumlah', });
lyr_sekolahdemak_1.set('fieldAliases', {'Sekolah': 'Sekolah', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'Jumlah': 'TextEdit', });
lyr_sekolahdemak_1.set('fieldImages', {'Sekolah': 'TextEdit', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldLabels', {'Kecamatan': 'inline label', 'Jumlah': 'inline label', });
lyr_sekolahdemak_1.set('fieldLabels', {'Sekolah': 'inline label', });
lyr_sekolahdemak_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});