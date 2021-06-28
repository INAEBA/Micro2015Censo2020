var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Microregiones2015Censo2020_3 = new ol.format.GeoJSON();
var features_Microregiones2015Censo2020_3 = format_Microregiones2015Censo2020_3.readFeatures(json_Microregiones2015Censo2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Microregiones2015Censo2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Microregiones2015Censo2020_3.addFeatures(features_Microregiones2015Censo2020_3);
var lyr_Microregiones2015Censo2020_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Microregiones2015Censo2020_3, 
                style: style_Microregiones2015Censo2020_3,
                interactive: true,
                title: '<img src="styles/legend/Microregiones2015Censo2020_3.png" /> Microregiones2015 Censo2020'
            });
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_Microregiones2015Censo2020_3.setVisible(true);
var layersList = [group_MapasBase,lyr_Microregiones2015Censo2020_3];
lyr_Microregiones2015Censo2020_3.set('fieldAliases', {'Municipio': 'Municipio', 'Micro': 'Micro', 'Analfa': 'Analfa', 'PrimIncom': 'PrimIncom', 'PrimCom': 'PrimCom', 'SecIncom': 'SecIncom', 'Rezago': 'Rezago', });
lyr_Microregiones2015Censo2020_3.set('fieldImages', {'Municipio': 'TextEdit', 'Micro': 'TextEdit', 'Analfa': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimCom': 'TextEdit', 'SecIncom': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_Microregiones2015Censo2020_3.set('fieldLabels', {'Municipio': 'inline label', 'Micro': 'inline label', 'Analfa': 'inline label', 'PrimIncom': 'inline label', 'PrimCom': 'inline label', 'SecIncom': 'inline label', 'Rezago': 'inline label', });
lyr_Microregiones2015Censo2020_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});