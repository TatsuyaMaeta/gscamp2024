// import main from "main";
// import { helloWorld } from "./main";
// helloWorld();

url = `./data/data.json`;
// const datas =
$.getJSON(url, (d) => {
    datas = d;
    let l = Object.keys(datas.data).length;
    console.log(l);
    console.log(d.data);
    console.log("d.labels[0]", d.labels[0]);
    console.log(d.data["中学生"]);
    console.log("datas", datas);
    let splt = d.dataComment[d.labels[0]].split("¥¥");
    let spltArr = [];
    console.log(splt);

    for (let i = 0; i < l; i++) {
        spltArr.push(d.dataComment[d.labels[i]].split("¥¥"));
    }
    console.log(spltArr);
    const labels = d.labels;

    const data = {
        labels: labels,
        datasets: [
            {
                //凡例名
                label: "My Motivation Graph",
                backgroundColor: "rgb(118, 10, 234)",
                borderColor: d.GsColorRGB,
                font: 24,
                data: [
                    d.data[d.labels[0]],
                    d.data[d.labels[1]],
                    d.data[d.labels[2]],
                    d.data[d.labels[3]],
                    d.data[d.labels[4]],
                    d.data[d.labels[5]],
                    d.data[d.labels[6]],
                    d.data[d.labels[7]],
                    d.data[d.labels[8]],
                ],
                pointRadius: 6,
                pointHoverRadius: 1,
                pointHitRadius: 15,
            },
        ],
    };

    // const options = {
    //     tooltips: {
    //         mode: "single",
    //         callback: {
    //             afterLabel: function (tooltipItem, hoge) {
    //                 console.log(tooltipItem);
    //                 console.log("hoge", hoge);
    //                 // var multistringText = ["first string"];
    //                 // // do some stuff
    //                 // multistringText.push("another string");

    //                 // return multistringText;

    //                 var label =
    //                     hoge.datasets[tooltipItem.datasetIndex].label || "";

    //                 if (label) {
    //                     label += ": ";
    //                 }
    //                 label += Math.round(tooltipItem.yLabel * 100) / 100;
    //                 return label;
    //             },
    //         },
    //     },
    // };
    const opt = {
        options: {
            tooltips: {
                callbacks: {
                    title: function () {
                        return "テストタイトル";
                    },
                },
            },
        },
    };
    // === include 'setup' then 'config' above ===
    const config = {
        type: "line",
        data,
        // https://www.chartjs.org/docs/latest/configuration/tooltip.html#label-callback
        options: {
            plugins: {
                tooltip: {
                    bodyFont: {
                        size: 28, // 文字サイズを36ptに変更
                    },
                    callbacks: {
                        afterLabel: function (tooltipItem, hoge) {
                            // console.log(tooltipItem);
                            // console.log(tooltipItem.parsed.x);
                            switch (tooltipItem.parsed.x) {
                                case 0:
                                    return splt; //d.dataComment[d.labels[0]];
                                case 1:
                                    return spltArr[1]; //d.dataComment[d.labels[1]];
                                case 2:
                                    return spltArr[2]; //d.dataComment[d.labels[2]];
                                case 3:
                                    return spltArr[3]; //d.dataComment[d.labels[3]];
                                case 4:
                                    return spltArr[4]; //d.dataComment[d.labels[4]];
                                case 5:
                                    return spltArr[5]; // d.dataComment[d.labels[5]];
                                case 6:
                                    // alert('OK');
                                    // const t = document.getElementById("myChart");
                                    // $("#myChart").on('click',function(){
                                    //     alert('msg');
                                    // });
                                    return spltArr[6]; //
                                // return [
                                //     d.dataComment[d.labels[5]],
                                //     d.dataComment[d.labels[6]],
                                // ];
                                case 7:
                                    return spltArr[7]; //d.dataComment[d.labels[7]];
                                case 8:
                                    return spltArr[8]; //d.dataComment[d.labels[8]];
                                default:
                                    break;
                            }
                            if (tooltipItem.parsed.x == 6) {
                                console.log("yesssss");
                                // let label = context.dataset.label || "";
                                console.log(tooltipItem);
                                console.log(d.dataComment[d.labels[6]]);
                                return d.dataComment[d.labels[6]];
                            }
                        },
                    },
                },
            },
        },
        // options: opt,
        // options: {},
    };
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, config);
    myChart.defaults.font.size = 48;
});
