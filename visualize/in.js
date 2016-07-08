// in.js

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i=0; i<vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] == variable) {
            return decodeURI(pair[1]);
        }
    }
    return (false);
}

v1 = getQueryVariable('v1');
v2 = getQueryVariable('v2');
v3 = getQueryVariable('v3');
v4 = getQueryVariable('v4');
v5 = getQueryVariable('v5');
v6 = getQueryVariable('v6');
v7 = getQueryVariable('v7');
v8 = getQueryVariable('v8');
v9 = getQueryVariable('v9');
v10 = getQueryVariable('v10');
v11 = getQueryVariable('v11');
v12 = getQueryVariable('v12');
v13 = getQueryVariable('v13');
v14 = getQueryVariable('v14');

if (v1) {
    var unit = v3.replace(/\d*/, '');
    var quantity = Number(v3.replace(unit, ''));

    var n_shelf = 20;
    var n_layer = 3;
    var n_place = 6;

    function getCurrentDate() {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        if (month >= 1 && month <= 9) {
            month = '0' + month;
        }
        if (day >= 0 && day <= 9) {
            day = '0' + day;
        }
        var currentDate = year + '-' + month + '-' + day;
        return currentDate;
    };

    $('#in-form').remove();
    $('#main').append($('<table>').addClass('ui fixed celled striped table')
        .append($('<tbody>')
            .append($('<tr>')
                .append($('<td>').append($('<b>').append('商品名')))
                .append($('<td>').append(v1))
            )
            .append($('<tr>')
                .append($('<td>').append($('<b>').append('商品批号')))
                .append($('<td>').append(v2))
            )
            .append($('<tr>')
                .append($('<td>').append($('<b>').append('商品数量')))
                .append($('<td>').append(v3))
            )
            .append($('<tr>')
                .append($('<td>').append($('<b>').append('供应商')))
                .append($('<td>').append(v4))
            )
            .append($('<tr>')
                .append($('<td>').append($('<b>').append('种植地')))
                .append($('<td>').append(v5))
            )
            .append($('<tr>')
                .append($('<td>').append($('<b>').append('土壤种类')))
                .append($('<td>').append(v6))
            )
            .append($('<tr>')
                .append($('<td>').append($('<b>').append('大棚温度')))
                .append($('<td>').append(v7))
            )
            .append($('<tr>')
                .append($('<td>').append($('<b>').append('大棚湿度')))
                .append($('<td>').append(v8))
            )
            .append($('<tr>')
                .append($('<td>').append($('<b>').append('种植日期')))
                .append($('<td>').append(v9))
            )
            .append($('<tr>')
                .append($('<td>').append($('<b>').append('收成日期')))
                .append($('<td>').append(v10))
            )
            .append($('<tr>')
                .append($('<td>').append($('<b>').append('装箱日期')))
                .append($('<td>').append(v11))
            )
            .append($('<tr>')
                .append($('<td>').append($('<b>').append('供应商发货日期')))
                .append($('<td>').append(v12))
            )
            .append($('<tr>')
                .append($('<td>').append($('<b>').append('供应路线')))
                .append($('<td>').append(v13))
            )
            .append($('<tr>')
                .append($('<td>').append($('<b>').append('配送人员')))
                .append($('<td>').append(v14))
            )
            .append($('<tr>')
                .append($('<td>').append($('<b>').append('入库时间')))
                .append($('<td>').append(getCurrentDate()))
            )
        )
    )
    .append($('<div>').append($('<a>').attr('href', '../in/').addClass('ui button').append('修改')))
    .append($('<h1>').addClass('ui dividing header').append('货位信息'))
    .append($('<table>').addClass('ui fixed celled striped table')
        .append($('<thead>')
            .append($('<tr>')
                .append($('<th>').append('序号'))
                .append($('<th>').append('库区号'))
                .append($('<th>').append('货架号'))
                .append($('<th>').append('货架层次号'))
                .append($('<th>').append('货位号'))
                .append($('<th>').append('条码'))
            )
        )
        .append($('<tbody>').attr('id', 'in-result-tbody'))
    );

    function num2str (num) {
        if (num < 10) {
            return '0' + String(num);
        }
        else {
            return String(num);
        };
    };

    var i_strorage = 1;
    var i_shelf = 1;
    var i_layer = 1;
    var i_place = 1;

    for (var i = 1; i <= quantity; i++) {
        $('#in-result-tbody').append($('<tr>')
            .append($('<td>').append($('<b>').append('第' + String(i) + unit)))
            .append($('<td>').append(num2str(i_strorage)))
            .append($('<td>').append(num2str(i_shelf)))
            .append($('<td>').append(num2str(i_layer)))
            .append($('<td>').append(num2str(i_place)))
            .append($('<td>').append(num2str(i_strorage) + num2str(i_shelf) + num2str(i_layer) + num2str(i_place)))
        );
        if (i_place == n_place) {
            i_place = 1;
            if (i_layer == n_layer) {
                i_layer = 1;
                if (i_shelf == n_shelf) {
                    i_shelf = 1;
                    i_strorage += 1;
                }
                else {
                    i_shelf += 1;
                }
            }
            else {
                i_layer += 1;
            };
        }
        else {
            i_place += 1;
        };
    };
};
