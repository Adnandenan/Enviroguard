var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BanjirBandang_1 = new ol.format.GeoJSON();
var features_BanjirBandang_1 = format_BanjirBandang_1.readFeatures(json_BanjirBandang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BanjirBandang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BanjirBandang_1.addFeatures(features_BanjirBandang_1);
var lyr_BanjirBandang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BanjirBandang_1, 
                style: style_BanjirBandang_1,
                popuplayertitle: 'Banjir Bandang',
                interactive: true,
    title: 'Banjir Bandang<br />\
    <img src="styles/legend/BanjirBandang_1_0.png" /> Rendah<br />\
    <img src="styles/legend/BanjirBandang_1_1.png" /> Sedang<br />\
    <img src="styles/legend/BanjirBandang_1_2.png" /> Tinggi<br />' });
var format_TitikEvakuasi_2 = new ol.format.GeoJSON();
var features_TitikEvakuasi_2 = format_TitikEvakuasi_2.readFeatures(json_TitikEvakuasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikEvakuasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikEvakuasi_2.addFeatures(features_TitikEvakuasi_2);
var lyr_TitikEvakuasi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikEvakuasi_2, 
                style: style_TitikEvakuasi_2,
                popuplayertitle: 'Titik Evakuasi',
                interactive: true,
                title: '<img src="styles/legend/TitikEvakuasi_2.png" /> Titik Evakuasi'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BanjirBandang_1.setVisible(true);lyr_TitikEvakuasi_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BanjirBandang_1,lyr_TitikEvakuasi_2];
lyr_BanjirBandang_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'tingkat kerawan berdasar tipe_Banjir': 'tingkat kerawan berdasar tipe_Banjir', 'tingkat kerawan berdasar tipe_Rob (Banjir Pesisir)': 'tingkat kerawan berdasar tipe_Rob (Banjir Pesisir)', 'tingkat kerawan berdasar tipe_Tanah Longsor': 'tingkat kerawan berdasar tipe_Tanah Longsor', });
lyr_TitikEvakuasi_2.set('fieldAliases', {'id': 'id', });
lyr_BanjirBandang_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'tingkat kerawan berdasar tipe_Banjir': 'TextEdit', 'tingkat kerawan berdasar tipe_Rob (Banjir Pesisir)': 'TextEdit', 'tingkat kerawan berdasar tipe_Tanah Longsor': 'TextEdit', });
lyr_TitikEvakuasi_2.set('fieldImages', {'id': 'TextEdit', });
lyr_BanjirBandang_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'tingkat kerawan berdasar tipe_Banjir': 'no label', 'tingkat kerawan berdasar tipe_Rob (Banjir Pesisir)': 'no label', 'tingkat kerawan berdasar tipe_Tanah Longsor': 'no label', });
lyr_TitikEvakuasi_2.set('fieldLabels', {'id': 'no label', });
lyr_TitikEvakuasi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});