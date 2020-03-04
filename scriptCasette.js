$(function(){

    $(".sticky-content").sticky({
        topSpacing: 50,
        zIndex: 2,
        stopper: "#footer",
    });

});


$(function () {
    $(document).tooltip();
});


var tabStandard =[
    [1199.04, 1226.4,1255.2,1284,1312.8,1341.6,1370.4,1399.2,1428,1456.8,1485.6,1514.4,1543.2,1572,1600.8,1629.6,1658.4,1687.2,1716,1744.8,1773.6,1802.4,1831.2,1860,1888.8,1917.6,1946.4,1975.2,2004,2032.8,2061.6,2090.4,2119.2],
    [1226.4,1255.2,1284,1314.24,1344.48,1374.72,1404.96,1435.2,1465.44,1495.68,1525.92,1556.16,1586.4,1616.64,1646.88,1677.12,1707.36,1737.6,1767.84,1798.08,1828.32,1858.56,1888.8,1919.04,1949.28,1979.52,2009.76,2040,2070.24,2100.48,2130.72,2160.96,2191.2],
    [20612696393,1312.8,1344.48,1376.16,1407.84,1439.52,1471.2,1502.88,1534.56,1566.24,1597.92,1629.6,1661.28,1692.96,1724.64,1756.32,1788,1819.68,1851.36,1883.04,1914.72,1946.4,1978.08,2009.76,2041.44,2073.12,2104.8,2136.48,2168.16,2199.84,2231.52,2263.2],
    [8588622976,1341.6,1374.72,1407.84,1440.96,1474.08,1507.2,1540.32,1573.44,1606.56,1639.68,1672.8,1705.92,1739.04,1772.16,1805.28,1838.4,1871.52,1904.64,1937.76,1970.88,2004,2037.12,2070.24,2103.36,2136.48,2169.6,2202.72,2235.84,2268.96,2302.08,2335.2],
    [3578592375,1370.4,1404.96,1439.52,1474.08,1508.64,1543.2,1577.76,1612.32,1646.88,1681.44,1716,1750.56,1785.12,1819.68,1854.24,1888.8,1923.36,1957.92,1992.48,2027.04,2061.6,2096.16,2130.72,2165.28,2199.84,2234.4,2268.96,2303.52,2338.08,2372.64,2407.2],
    [1491079612,1399.2,1435.2,1471.2,1507.2,1543.2,1579.2,1615.2,1651.2,1687.2,1723.2,1759.2,1795.2,1831.2,1867.2,1903.2,1939.2,1975.2,2011.2,2047.2,2083.2,2119.2,2155.2,2191.2,2227.2,2263.2,2299.2,2335.2,2371.2,2407.2,2443.2,2479.2],
    [621282616.9,1428,1465.44,1502.88,1540.32,1577.76,1615.2,1652.64,1690.08,1727.52,1764.96,1802.4,1839.84,1877.28,1914.72,1952.16,1989.6,2027.04,2064.48,2101.92,2139.36,2176.8,2214.24,2251.68,2289.12,2326.56,2364,2401.44,2438.88,2476.32,2513.76,2551.2],
    [258867190.6,1456.8,1495.68,1534.56,1573.44,1612.32,1651.2,1690.08,1728.96,1767.84,1806.72,1845.6,1884.48,1923.36,1962.24,2001.12,2040,2078.88,2117.76,2156.64,2195.52,2234.4,2273.28,2312.16,2351.04,2389.92,2428.8,2467.68,2506.56,2545.44,2584.32,2623.2],
    [107860751.6,1485.6,1525.92,1566.24,1606.56,1646.88,1687.2,1727.52,1767.84,1808.16,1848.48,1888.8,1929.12,1969.44,2009.76,2050.08,2090.4,2130.72,2171.04,2211.36,2251.68,2292,2332.32,2372.64,2412.96,2453.28,2493.6,2533.92,2574.24,2614.56,2654.88,2695.2],
    [44941390.64,1514.4,1556.16,1597.92,1639.68,1681.44,1723.2,1764.96,1806.72,1848.48,1890.24,1932,1973.76,2015.52,2057.28,2099.04,2140.8,2182.56,2224.32,2266.08,2307.84,2349.6,2391.36,2433.12,2474.88,2516.64,2558.4,2600.16,2641.92,2683.68,2725.44,2767.2],
    [18724978.84,1543.2,1586.4,1629.6,1672.8,1716,1759.2,1802.4,1845.6,1888.8,1932,1975.2,2018.4,2061.6,2104.8,2148,2191.2,2234.4,2277.6,2320.8,2364,2407.2,2450.4,2493.6,2536.8,2580,2623.2,2666.4,2709.6,2752.8,2796,2839.2],
    [7801462.515,1572,1616.64,1661.28,1705.92,1750.56,1795.2,1839.84,1884.48,1929.12,1973.76,2018.4,2063.04,2107.68,2152.32,2196.96,2241.6,2286.24,2330.88,2375.52,2420.16,2464.8,2509.44,2554.08,2598.72,2643.36,2688,2732.64,2777.28,2821.92,2866.56,2911.2],
    [3249985.981,1600.8,1646.88,1692.96,1739.04,1785.12,1831.2,1877.28,1923.36,1969.44,2015.52,2061.6,2107.68,2153.76,2199.84,2245.92,2292,2338.08,2384.16,2430.24,2476.32,2522.4,2568.48,2614.56,2660.64,2706.72,2752.8,2798.88,2844.96,2891.04,2937.12,2983.2],
    [1353526.025,1629.6,1677.12,1724.64,1772.16,1819.68,1867.2,1914.72,1962.24,2009.76,2057.28,2104.8,2152.32,2199.84,2247.36,2294.88,2342.4,2389.92,2437.44,2484.96,2532.48,2580,2627.52,2675.04,2722.56,2770.08,2817.6,2865.12,2912.64,2960.16,3007.68,3055.2],
    [563322.9773,1658.4,1707.36,1756.32,1805.28,1854.24,1903.2,1952.16,2001.12,2050.08,2099.04,2148,2196.96,2245.92,2294.88,2343.84,2392.8,2441.76,2490.72,2539.68,2588.64,2637.6,2686.56,2735.52,2784.48,2833.44,2882.4,2931.36,2980.32,3029.28,3078.24,3127.2],
    [234060.3072,1687.2,1737.6,1788,1838.4,1888.8,1939.2,1989.6,2040,2090.4,2140.8,2191.2,2241.6,2292,2342.4,2392.8,2443.2,2493.6,2544,2594.4,2644.8,2695.2,2745.6,2796,2846.4,2896.8,2947.2,2997.6,3048,3098.4,3148.8,3199.2],
    [96856.128,1716,1767.84,1819.68,1871.52,1923.36,1975.2,2027.04,2078.88,2130.72,2182.56,2234.4,2286.24,2338.08,2389.92,2441.76,2493.6,2545.44,2597.28,2649.12,2700.96,2752.8,2804.64,2856.48,2908.32,2960.16,3012,3063.84,3115.68,3167.52,3219.36,3271.2],
    [39676.32,1744.8,1798.08,1851.36,1904.64,1957.92,2011.2,2064.48,2117.76,2171.04,2224.32,2277.6,2330.88,2384.16,2437.44,2490.72,2544,2597.28,2650.56,2703.84,2757.12,2810.4,2863.68,2916.96,2970.24,3023.52,3076.8,3130.08,3183.36,3236.64,3289.92,3343.2],
    [15840,1773.6,1828.32,1883.04,1937.76,1992.48,2047.2,2101.92,2156.64,2211.36,2266.08,2320.8,2375.52,2430.24,2484.96,2539.68,2594.4,2649.12,2703.84,2758.56,2813.28,2868,2922.72,2977.44,3032.16,3086.88,3141.6,3196.32,3251.04,3305.76,3360.48,3415.2],
    [5896.8,1802.4,1858.56,1914.72,1970.88,2027.04,2083.2,2139.36,2195.52,2251.68,2307.84,2364,2420.16,2476.32,2532.48,2588.64,2644.8,2700.96,2757.12,2813.28,2869.44,2925.6,2981.76,3037.92,3094.08,3150.24,3206.4,3262.56,3318.72,3374.88,3431.04,3487.2],
    [1742.4,1831.2,1888.8,1946.4,2004,2061.6,2119.2,2176.8,2234.4,2292,2349.6,2407.2,2464.8,2522.4,2580,2637.6,2695.2,2752.8,2810.4,2868,2925.6,2983.2,3040.8,3098.4,3156,3213.6,3271.2,3328.8,3386.4,3444,3501.6,3559.2]
];
vartabCouleur =

    [
        [1354.992,1390.56,1428,1465.44,1502.88,1540.32,1577.76,1615.2,1652.64,1690.08,1727.52,1764.96,1802.4,1839.84,1877.28,1914.72,1952.16,1989.6,2027.04,2064.48,2101.92,2139.36,2176.8,2214.24,2251.68,2289.12,2326.56,2364,2401.44,2438.88,2476.32,2513.76],
        [1426.128,1465.44,1504.752,1544.064,1583.376,1622.688,1662,1701.312,1740.624,1779.936,1819.248,1858.56,1897.872,1937.184,1976.496,2015.808,2055.12,2094.432,2133.744,2173.056,2212.368,2251.68,2290.992,2330.304,2369.616,2408.928,2448.24,2487.552,2526.864,2566.176,2605.488],
        [1461.696,1502.88,1544.064,1585.248,1626.432,1667.616,1708.8,1749.984,1791.168,1832.352,1873.536,1914.72,1955.904,1997.088,2038.272,2079.456,2120.64,2161.824,2203.008,2244.192,2285.376,2326.56,2367.744,2408.928,2450.112,2491.296,2532.48,2573.664,2614.848,2656.032,2697.216],
        [1497.264,1540.32,1583.376,1626.432,1669.488,1712.544,1755.6,1798.656,1841.712,1884.768,1927.824,1970.88,2013.936,2056.992,2100.048,2143.104,2186.16,2229.216,2272.272,2315.328,2358.384,2401.44,2444.496,2487.552,2530.608,2573.664,2616.72,2659.776,2702.832,2745.888,2788.944],
        [1532.832,1577.76,1622.688,1667.616,1712.544,1757.472,1802.4,1847.328,1892.256,1937.184,1982.112,2027.04,2071.968,2116.896,2161.824,2206.752,2251.68,2296.608,2341.536,2386.464,2431.392,2476.32,2521.248,2566.176,2611.104,2656.032,2700.96,2745.888,2790.816,2835.744,2880.672],
        [1568.4,1615.2,1662,1708.8,1755.6,1802.4,1849.2,1896,1942.8,1989.6,2036.4,2083.2,2130,2176.8,2223.6,2270.4,2317.2,2364,2410.8,2457.6,2504.4,2551.2,2598,2644.8,2691.6,2738.4,2785.2,2832,2878.8,2925.6,2972.4],
        [1603.968,1652.64,1701.312,1749.984,1798.656,1847.328,1896,1944.672,1993.344,2042.016,2090.688,2139.36,2188.032,2236.704,2285.376,2334.048,2382.72,2431.392,2480.064,2528.736,2577.408,2626.08,2674.752,2723.424,2772.096,2820.768,2869.44,2918.112,2966.784,3015.456,3064.128],
        [1639.536,1690.08,1740.624,1791.168,1841.712,1892.256,1942.8,1993.344,2043.888,2094.432,2144.976,2195.52,2246.064,2296.608,2347.152,2397.696,2448.24,2498.784,2549.328,2599.872,2650.416,2700.96,2751.504,2802.048,2852.592,2903.136,2953.68,3004.224,3054.768,3105.312,3155.856],
        [1675.104,1727.52,1779.936,1832.352,1884.768,1937.184,1989.6,2042.016,2094.432,2146.848,2199.264,2251.68,2304.096,2356.512,2408.928,2461.344,2513.76,2566.176,2618.592,2671.008,2723.424,2775.84,2828.256,2880.672,2933.088,2985.504,3037.92,3090.336,3142.752,3195.168,3247.584],
        [1710.672,1764.96,1819.248,1873.536,1927.824,1982.112,2036.4,2090.688,2144.976,2199.264,2253.552,2307.84,2362.128,2416.416,2470.704,2524.992,2579.28,2633.568,2687.856,2742.144,2796.432,2850.72,2905.008,2959.296,3013.584,3067.872,3122.16,3176.448,3230.736,3285.024,3339.312],
        [1746.24,1802.4,1858.56,1914.72,1970.88,2027.04,2083.2,2139.36,2195.52,2251.68,2307.84,2364,2420.16,2476.32,2532.48,2588.64,2644.8,2700.96,2757.12,2813.28,2869.44,2925.6,2981.76,3037.92,3094.08,3150.24,3206.4,3262.56,3318.72,3374.88,3431.04],
        [1781.808,1839.84,1897.872,1955.904,2013.936,2071.968,2130,2188.032,2246.064,2304.096,2362.128,2420.16,2478.192,2536.224,2594.256,2652.288,2710.32,2768.352,2826.384,2884.416,2942.448,3000.48,3058.512,3116.544,3174.576,3232.608,3290.64,3348.672,3406.704,3464.736,3522.768],
        [1817.376,1877.28,1937.184,1997.088,2056.992,2116.896,2176.8,2236.704,2296.608,2356.512,2416.416,2476.32,2536.224,2596.128,2656.032,2715.936,2775.84,2835.744,2895.648,2955.552,3015.456,3075.36,3135.264,3195.168,3255.072,3314.976,3374.88,3434.784,3494.688,3554.592,3614.496],
        [1852.944,1914.72,1976.496,2038.272,2100.048,2161.824,2223.6,2285.376,2347.152,2408.928,2470.704,2532.48,2594.256,2656.032,2717.808,2779.584,2841.36,2903.136,2964.912,3026.688,3088.464,3150.24,3212.016,3273.792,3335.568,3397.344,3459.12,3520.896,3582.672,3644.448,3706.224],
        [1888.512,1952.16,2015.808,2079.456,2143.104,2206.752,2270.4,2334.048,2397.696,2461.344,2524.992,2588.64,2652.288,2715.936,2779.584,2843.232,2906.88,2970.528,3034.176,3097.824,3161.472,3225.12,3288.768,3352.416,3416.064,3479.712,3543.36,3607.008,3670.656,3734.304,3797.952],
        [1924.08,1989.6,2055.12,2120.64,2186.16,2251.68,2317.2,2382.72,2448.24,2513.76,2579.28,2644.8,2710.32,2775.84,2841.36,2906.88,2972.4,3037.92,3103.44,3168.96,3234.48,3300,3365.52,3431.04,3496.56,3562.08,3627.6,3693.12,3758.64,3824.16,3889.68],
        [1959.648,2027.04,2094.432,2161.824,2229.216,2296.608,2364,2431.392,2498.784,2566.176,2633.568,2700.96,2768.352,2835.744,2903.136,2970.528,3037.92,3105.312,3172.704,3240.096,3307.488,3374.88,3442.272,3509.664,3577.056,3644.448,3711.84,3779.232,3846.624,3914.016,3981.408],
        [1995.216,2064.48,2133.744,2203.008,2272.272,2341.536,2410.8,2480.064,2549.328,2618.592,2687.856,2757.12,2826.384,2895.648,2964.912,3034.176,3103.44,3172.704,3241.968,3311.232,3380.496,3449.76,3519.024,3588.288,3657.552,3726.816,3796.08,3865.344,3934.608,4003.872,4073.136],
        [2030.784,2101.92,2173.056,2244.192,2315.328,2386.464,2457.6,2528.736,2599.872,2671.008,2742.144,2813.28,2884.416,2955.552,3026.688,3097.824,3168.96,3240.096,3311.232,3382.368,3453.504,3524.64,3595.776,3666.912,3738.048,3809.184,3880.32,3951.456,4022.592,4093.728,4164.864],
        [2066.352,2139.36,2212.368,2285.376,2358.384,2431.392,2504.4,2577.408,2650.416,2723.424,2796.432,2869.44,2942.448,3015.456,3088.464,3161.472,3234.48,3307.488,3380.496,3453.504,3526.512,3599.52,3672.528,3745.536,3818.544,3891.552,3964.56,4037.568,4110.576,4183.584,4256.592],
        [2101.92,2176.8,2251.68,2326.56,2401.44,2476.32,2551.2,2626.08,2700.96,2775.84,2850.72,2925.6,3000.48,3075.36,3150.24,3225.12,3300,3374.88,3449.76,3524.64,3599.52,3674.4,3749.28,3824.16,3899.04,3973.92,4048.8,4123.68,4198.56,4273.44,4348.32]
    ];


function hublotAffiche() {

    if ($("input[name='hublot']:checked").val()=='hublot rectangulaire') {
        document.getElementById("hQte").style.display = "inline-block";
        document.getElementById("hQte1").style.display = "none";
        document.getElementById("hQte2").style.display = "none";
    } else if ($("input[name='hublot']:checked").val()=='hublot ovale') {
        document.getElementById("hQte1").style.display = "inline-block";
        document.getElementById("hQte").style.display = "none";
        document.getElementById("hQte2").style.display = "none";
    } else if (($("input[name='hublot']:checked").val()=='ventilation')) {
        document.getElementById("hQte2").style.display = "inline-block";
        document.getElementById("hQte").style.display = "none";
        document.getElementById("hQte1").style.display = "none";
    }


}


function afficheAcce() {
    var motor = $("input[name='motorisation']:checked").val();

    if (motor == 'Oui')
        document.getElementById("accessId").style.display = "block";
    else
        document.getElementById("accessId").style.display = "none";

}

function afficheSecur() {


    var portillon = $("input[name='portillon']:checked").val();
    console.log(portillon);

    var motorisation = $("input[name='motorisation']:checked").val();
    console.log(motorisation);

    if (motorisation == 'Oui' && portillon == 'OUI') {


        document.getElementById("securiteId").style.display = "block";


    }

    if (portillon == 'OUI' && motorisation == 'Oui') {


        document.getElementById("securiteId").style.display = "block";

    }
    if (motorisation == 'Non' && portillon == 'Non') {

        document.getElementById("securiteId").style.display = "none";


    }
    if (portillon == 'OUI' && motorisation == 'Non') {


        document.getElementById("securiteId").style.display = "none";


    }


    if (motorisation == 'Oui' && portillon == 'Non') {

        document.getElementById("securiteId").style.display = "none";

    }

    if (motorisation == 'Oui' && portillon == 'OUI') {
        document.getElementById("securiteId").style.display = "block";
    }

    if (portillon == 'Non' && motorisation == 'Oui') {
        document.getElementById("securiteId").style.display = "none";
    }
    if (motorisation == 'Non' && portillon == 'Non') {
        document.getElementById("securiteId").style.display = "none";
    }
}


//function portillonInsert() {

//  var port = $("input[name='portillon']:checked").val();

/*  if (port = 'Portillon Porte Sectionnelle Verticale') {
      document.getElementById("divClr").style.display = "none";
      document.getElementById("divClr1").style.display = "block";
      document.getElementById("divClr1").style.backgroundColor = document.getElementById("divClr").style.backgroundColor;

  } else if (port = 'Non') {
      document.getElementById("divClr1").style.display = "none";
  }


  /*for (i = 0; i < document.formulaire.modele.length; i++) {
      if (document.formulaire.modele[i].checked) {
          valeur = document.formulaire.modele[i].value;
*/

/*  var valeur = '';

  if (valeur == 'Rainures horizontales') {

      document.getElementById("couleur1").style.display = "block";
      document.getElementById("couleur2").style.display = "block";
      document.getElementById("couleur3").style.display = "block";
      document.getElementById("couleur4").style.display = "block";
      document.getElementById("couleur5").style.display = "block";
      document.getElementById("couleur6").style.display = "block";
      document.getElementById("couleur7").style.display = "block";
      document.getElementById("couleur8").style.display = "block";
      document.getElementById("divClr1").style.display = "block";
      document.getElementById("divClr1").style.display = "block";
      document.getElementById("divClr1").style.backgroundColor = "#ffffFF";
      $("#imgModele1").attr('src', 'img/DOUBLE.png');
  }


  if (valeur == 'Lisse') {
      document.getElementById("couleur4").style.display = "none";
      document.getElementById("couleur5").style.display = "none";
      document.getElementById("couleur6").style.display = "none";
      document.getElementById("couleur7").style.display = "none";
      document.getElementById("couleur8").style.display = "none";
      document.getElementById("couleur1").style.display = "block";
      document.getElementById("couleur2").style.display = "block";
      document.getElementById("couleur3").style.display = "block";
      document.getElementById("divClr").style.display = "none";
      document.getElementById("divClr1").style.display = "block";
      document.getElementById("divClr1").style.backgroundColor = "#ffffFF";
      $("#imgModele1").attr('src', 'img/lissePort.jpg');

  }
  if (valeur == 'Cassette') {

      document.getElementById("couleur2").style.display = "none";
      document.getElementById("couleur3").style.display = "none";
      document.getElementById("couleur4").style.display = "none";
      document.getElementById("couleur5").style.display = "none";
      document.getElementById("couleur6").style.display = "none";
      document.getElementById("couleur7").style.display = "none";
      document.getElementById("couleur8").style.display = "none";
      document.getElementById("couleur1").style.display = "block";
      document.getElementById("divClr").style.display = "none";
      document.getElementById("divClr1").style.display = "block";
      document.getElementById("divClr1").style.backgroundColor = "#ffffFF";
      $("#imgModele1").attr('src', 'img/casettePort.jpg');


  }
  if (valeur == 'Monorainure') {
      document.getElementById("couleur2").style.display = "none";
      document.getElementById("couleur3").style.display = "none";
      document.getElementById("couleur4").style.display = "none";
      document.getElementById("couleur5").style.display = "none";
      document.getElementById("couleur6").style.display = "none";
      document.getElementById("couleur7").style.display = "none";
      document.getElementById("couleur8").style.display = "none";
      document.getElementById("couleur1").style.display = "block";
      document.getElementById("divClr").style.display = "none";
      document.getElementById("divClr1").style.display = "block";
      document.getElementById("divClr1").style.backgroundColor = "#ffffFF";
      $("#imgModele1").attr('src', 'img/rainurePort.JPG');
  }


}
*/

function changeCouleur() {

    var couleur = $("input[name='couleur']:checked").val();

    if (couleur == '') {

        //document.body.style.backgroundColor ="#ffffff";
        document.getElementById("divClr").style.backgroundColor = "#ffffFF";
        document.getElementById("divClr1").style.backgroundColor = "#ffffFF";
        document.getElementById("divClr2").style.backgroundColor = "#ffffFF";
        document.getElementById("divClr3").style.backgroundColor = "#ffffFF";
        document.getElementById("divClr4").style.backgroundColor = "#ffffFF";
        document.getElementById("divClr5").style.backgroundColor = "#ffffFF";

    }

    if (couleur == 'blanc') {
        //  document.getElementById("divClr").style.display = "block";
        document.getElementById("divClr").style.backgroundColor = "#ffffFF";
        //  document.body.style.backgroundImage = "url('')";
        // document.body.style.backgroundColor ="#ffffff";
        document.getElementById("divClr1").style.backgroundColor = "#ffffFF";
        document.getElementById("divClr2").style.backgroundColor = "#ffffFF";
        document.getElementById("divClr3").style.backgroundColor = "#ffffFF";
        document.getElementById("divClr4").style.backgroundColor = "#ffffFF";
        document.getElementById("divClr5").style.backgroundColor = "#ffffFF";



    } else if (couleur == 'gris') {
        // document.getElementById("divClr").style.display = "block";
        document.getElementById("divClr").style.backgroundColor = "#3d3e43";
        document.getElementById("divClr1").style.backgroundColor = "#3d3e43";
        document.getElementById("divClr2").style.backgroundColor = "#3d3e43";
        document.getElementById("divClr3").style.backgroundColor = "#3d3e43";
        document.getElementById("divClr4").style.backgroundColor = "#3d3e43";
        document.getElementById("divClr5").style.backgroundColor = "#3d3e43";


        //document.body.style.backgroundImage = "url('')";
        // document.body.style.backgroundColor ="#3d3e43";
        //$("body").css({"backgroundImage": "url('')"});

    } else if (couleur == 'grisAlu') {
        //  document.getElementById("divClr").style.display = "block";
        document.getElementById("divClr").style.backgroundColor = "#A5A5A5";
        document.getElementById("divClr1").style.backgroundColor = "#A5A5A5";
        document.getElementById("divClr2").style.backgroundColor = "#A5A5A5";
        document.getElementById("divClr3").style.backgroundColor = "#A5A5A5";
        document.getElementById("divClr4").style.backgroundColor = "#A5A5A5";
        document.getElementById("divClr5").style.backgroundColor = "#A5A5A5";

        // document.body.style.backgroundImage = "url('')";
        //  $("body").css({"backgroundImage": "url('')"});
        // document.body.style.backgroundColor ="#b3b5b4";

    } else if (couleur == 'vert') {
        // document.getElementById("divClr").style.display = "block";
        document.getElementById("divClr").style.backgroundColor = "#2F4538";
        document.getElementById("divClr1").style.backgroundColor = "#2F4538";
        document.getElementById("divClr2").style.backgroundColor = "#2F4538";
        document.getElementById("divClr3").style.backgroundColor = "#2F4538";
        document.getElementById("divClr4").style.backgroundColor = "#2F4538";
        document.getElementById("divClr5").style.backgroundColor = "#2F4538";
        ;
        // document.body.style.backgroundImage = "url('')";
        // $("body").css({"backgroundImage": "url('')"});
        //  document.body.style.backgroundColor ="#2d4537";

    } else if (couleur == 'brun') {
        // document.getElementById("divClr").style.display = "block";
        document.getElementById("divClr").style.backgroundColor = "#382C1E";
        document.getElementById("divClr1").style.backgroundColor = "#382C1E";
        document.getElementById("divClr2").style.backgroundColor = "#382C1E";
        document.getElementById("divClr3").style.backgroundColor = "#382C1E";
        document.getElementById("divClr4").style.backgroundColor = "#382C1E";
        document.getElementById("divClr5").style.backgroundColor = "#382C1E";

        // document.body.style.backgroundImage = "url('')";
        // $("body").css({"backgroundImage": "url('')"});
        //  document.body.style.backgroundColor ="#471b12";

    } else if (couleur == 'bleu') {
        // document.getElementById("divClr").style.display = "block";
        document.getElementById("divClr").style.backgroundColor = "#2d5d9b";
        document.getElementById("divClr1").style.backgroundColor = "#2d5d9b";
        document.getElementById("divClr2").style.backgroundColor = "#2d5d9b";
        document.getElementById("divClr3").style.backgroundColor = "#2d5d9b";
        document.getElementById("divClr4").style.backgroundColor = "#2d5d9b";
        document.getElementById("divClr5").style.backgroundColor = "#2d5d9b";

        // document.body.style.backgroundImage = "url('')";
        //  $("body").css({"backgroundImage": "url('')"});
        // document.body.style.backgroundColor ="#0f294e";

    } else if (couleur == 'rouge') {
        // document.getElementById("divClr").style.display = "block";
        document.getElementById("divClr").style.backgroundColor = "#aa150e";
        document.getElementById("divClr1").style.backgroundColor = "#aa150e";
        document.getElementById("divClr2").style.backgroundColor = "#aa150e";
        document.getElementById("divClr3").style.backgroundColor = "#aa150e";
        document.getElementById("divClr4").style.backgroundColor = "#aa150e";
        document.getElementById("divClr5").style.backgroundColor = "#aa150e";

        // document.body.style.backgroundImage = "url('')";
        //  $("body").css({"backgroundImage": "url('')"});
        // document.body.style.backgroundColor ="#af2d1d";

    } else if (couleur == 'ivoire') {
        // document.getElementById("divClr").style.display = "block";
        document.getElementById("divClr").style.backgroundColor = "#E6D2B5";
        document.getElementById("divClr1").style.backgroundColor = "#E6D2B5";
        document.getElementById("divClr2").style.backgroundColor = "#E6D2B5";
        document.getElementById("divClr3").style.backgroundColor = "#E6D2B5";
        document.getElementById("divClr4").style.backgroundColor = "#E6D2B5";
        document.getElementById("divClr5").style.backgroundColor = "#E6D2B5";

        // document.body.style.backgroundImage = "url('')";
        // $("body").css({"backgroundImage": "url('')"});
        //  document.body.style.backgroundColor ="#e5d691";

    }
}


$("select.colorer").change(function(){
    var couleur2 = $(this).children("option:selected").val();


    if(couleur2=='Ral 1000 - Beige vert'){

        document.getElementById("divClr").style.backgroundColor = "#ccc188";
        document.getElementById("divClr1").style.backgroundColor = "#ccc188";
        document.getElementById("divClr2").style.backgroundColor = "#ccc188";
        document.getElementById("divClr3").style.backgroundColor = "#ccc188";
        document.getElementById("divClr4").style.backgroundColor = "#ccc188";
        document.getElementById("divClr5").style.backgroundColor ="#ccc188";
    }else if(couleur2=='Ral 1001 - Beige'){


        document.getElementById("divClr").style.backgroundColor = "#ceb487";
        document.getElementById("divClr1").style.backgroundColor = "#ceb487";
        document.getElementById("divClr2").style.backgroundColor = "#ceb487";
        document.getElementById("divClr3").style.backgroundColor = "#ceb487";
        document.getElementById("divClr4").style.backgroundColor = "#ceb487";
        document.getElementById("divClr5").style.backgroundColor ="#ceb487";
    }else if(couleur2=='Ral 1002 - Jaune sable'){

        document.getElementById("divClr").style.backgroundColor = "#d0b173";
        document.getElementById("divClr1").style.backgroundColor = "#d0b173";
        document.getElementById("divClr2").style.backgroundColor = "#d0b173";
        document.getElementById("divClr3").style.backgroundColor = "#d0b173";
        document.getElementById("divClr4").style.backgroundColor = "#d0b173";
        document.getElementById("divClr5").style.backgroundColor ="#d0b173";


    }else if(couleur2=='Ral 1003 - Jaune de sécurité'){

        document.getElementById("divClr").style.backgroundColor = "#f2ad00";
        document.getElementById("divClr1").style.backgroundColor = "#f2ad00";
        document.getElementById("divClr2").style.backgroundColor = "#f2ad00";
        document.getElementById("divClr3").style.backgroundColor = "#f2ad00";
        document.getElementById("divClr4").style.backgroundColor = "#f2ad00";
        document.getElementById("divClr5").style.backgroundColor ="#f2ad00";

    }else if(couleur2=='Ral 1004 - Jaune or'){

        document.getElementById("divClr").style.backgroundColor = "#e4a700";
        document.getElementById("divClr1").style.backgroundColor = "#e4a700";
        document.getElementById("divClr2").style.backgroundColor = "#e4a700";
        document.getElementById("divClr3").style.backgroundColor = "#e4a700";
        document.getElementById("divClr4").style.backgroundColor = "#e4a700";
        document.getElementById("divClr5").style.backgroundColor ="#e4a700";
    }else if(couleur2=='Ral 1005 - Jaune miel'){

        document.getElementById("divClr").style.backgroundColor = "#c79600";
        document.getElementById("divClr1").style.backgroundColor = "#c79600";
        document.getElementById("divClr2").style.backgroundColor = "#c79600";
        document.getElementById("divClr3").style.backgroundColor = "#c79600";
        document.getElementById("divClr4").style.backgroundColor = "#c79600";
        document.getElementById("divClr5").style.backgroundColor ="#c79600";
    }else if(couleur2=='Ral 1006 - Jaune maïs'){

        document.getElementById("divClr").style.backgroundColor = "#c79600";
        document.getElementById("divClr1").style.backgroundColor = "#c79600";
        document.getElementById("divClr2").style.backgroundColor = "#c79600";
        document.getElementById("divClr3").style.backgroundColor = "#c79600";
        document.getElementById("divClr4").style.backgroundColor = "#c79600";
        document.getElementById("divClr5").style.backgroundColor ="#c79600";
    }else if(couleur2=='Ral 1007 - Jaune narcisse'){

        document.getElementById("divClr").style.backgroundColor = "#e69400";
        document.getElementById("divClr1").style.backgroundColor = "#e69400";
        document.getElementById("divClr2").style.backgroundColor = "#e69400";
        document.getElementById("divClr3").style.backgroundColor = "#e69400";
        document.getElementById("divClr4").style.backgroundColor = "#e69400";
        document.getElementById("divClr5").style.backgroundColor ="#e69400";
    }else if(couleur2=='Ral 1011 - Beige brun'){

        document.getElementById("divClr").style.backgroundColor = "#af8552";
        document.getElementById("divClr1").style.backgroundColor = "#af8552";
        document.getElementById("divClr2").style.backgroundColor = "#af8552";
        document.getElementById("divClr3").style.backgroundColor = "#af8552";
        document.getElementById("divClr4").style.backgroundColor = "#af8552";
        document.getElementById("divClr5").style.backgroundColor ="#af8552";
    }else if(couleur2=='Ral 1012 - Jaune citron'){

        document.getElementById("divClr").style.backgroundColor = "#d8ba2e";
        document.getElementById("divClr1").style.backgroundColor = "#d8ba2e";
        document.getElementById("divClr2").style.backgroundColor = "#d8ba2e";
        document.getElementById("divClr3").style.backgroundColor = "#d8ba2e";
        document.getElementById("divClr4").style.backgroundColor = "#d8ba2e";
        document.getElementById("divClr5").style.backgroundColor ="#d8ba2e";
    }else if(couleur2=='Ral 1013 - Blanc perlé'){

        document.getElementById("divClr").style.backgroundColor = "#e5dfcc";
        document.getElementById("divClr1").style.backgroundColor = "#e5dfcc";
        document.getElementById("divClr2").style.backgroundColor = "#e5dfcc";
        document.getElementById("divClr3").style.backgroundColor = "#e5dfcc";
        document.getElementById("divClr4").style.backgroundColor = "#e5dfcc";
        document.getElementById("divClr5").style.backgroundColor ="#e5dfcc";
    }else if(couleur2=='Ral 1014 - Ivoire'){

        document.getElementById("divClr").style.backgroundColor = "#dfcea1";
        document.getElementById("divClr1").style.backgroundColor = "#dfcea1";
        document.getElementById("divClr2").style.backgroundColor = "#dfcea1";
        document.getElementById("divClr3").style.backgroundColor = "#dfcea1";
        document.getElementById("divClr4").style.backgroundColor = "#dfcea1";
        document.getElementById("divClr5").style.backgroundColor ="#dfcea1";
    }else if(couleur2=='Ral 1015 - Ivoire clair'){

        document.getElementById("divClr").style.backgroundColor = "#e6d9bd";
        document.getElementById("divClr1").style.backgroundColor = "#e6d9bd";
        document.getElementById("divClr2").style.backgroundColor = "#e6d9bd";
        document.getElementById("divClr3").style.backgroundColor = "#e6d9bd";
        document.getElementById("divClr4").style.backgroundColor = "#e6d9bd";
        document.getElementById("divClr5").style.backgroundColor ="#e6d9bd";

    }else if(couleur2=='Ral 1016 - Jaune soufre'){

        document.getElementById("divClr").style.backgroundColor = "#ecea41";
        document.getElementById("divClr1").style.backgroundColor = "#ecea41";
        document.getElementById("divClr2").style.backgroundColor = "#ecea41";
        document.getElementById("divClr3").style.backgroundColor = "#ecea41";
        document.getElementById("divClr4").style.backgroundColor = "#ecea41";
        document.getElementById("divClr5").style.backgroundColor ="#ecea41";
    }else if(couleur2=='Ral 1017 - Jaune safran'){

        document.getElementById("divClr").style.backgroundColor = "#f6b256";
        document.getElementById("divClr1").style.backgroundColor = "#f6b256";
        document.getElementById("divClr2").style.backgroundColor = "#f6b256";
        document.getElementById("divClr3").style.backgroundColor = "#f6b256";
        document.getElementById("divClr4").style.backgroundColor = "#f6b256";
        document.getElementById("divClr5").style.backgroundColor ="#f6b256";
    }else if(couleur2=='Ral 1018 - Jaune zinc'){

        document.getElementById("divClr").style.backgroundColor = "#fdda38";
        document.getElementById("divClr1").style.backgroundColor = "#fdda38";
        document.getElementById("divClr2").style.backgroundColor = "#fdda38";
        document.getElementById("divClr3").style.backgroundColor = "#fdda38";
        document.getElementById("divClr4").style.backgroundColor = "#fdda38";
        document.getElementById("divClr5").style.backgroundColor ="#fdda38";
    }else if(couleur2=='Ral 1019 - Beige gris'){

        document.getElementById("divClr").style.backgroundColor = "#a6937b";
        document.getElementById("divClr1").style.backgroundColor = "#a6937b";
        document.getElementById("divClr2").style.backgroundColor = "#a6937b";
        document.getElementById("divClr3").style.backgroundColor = "#a6937b";
        document.getElementById("divClr4").style.backgroundColor = "#a6937b";
        document.getElementById("divClr5").style.backgroundColor ="#a6937b";
    }else if(couleur2=='Ral 1020 - Jaune olive'){

        document.getElementById("divClr").style.backgroundColor = "#a09465";
        document.getElementById("divClr1").style.backgroundColor = "#a09465";
        document.getElementById("divClr2").style.backgroundColor = "#a09465";
        document.getElementById("divClr3").style.backgroundColor = "#a09465";
        document.getElementById("divClr4").style.backgroundColor = "#a09465";
        document.getElementById("divClr5").style.backgroundColor ="#a09465";

    }else if(couleur2=='Ral 1021 - Jaune colza'){

        document.getElementById("divClr").style.backgroundColor = "#a09465";
        document.getElementById("divClr1").style.backgroundColor = "#a09465";
        document.getElementById("divClr2").style.backgroundColor = "#a09465";
        document.getElementById("divClr3").style.backgroundColor = "#a09465";
        document.getElementById("divClr4").style.backgroundColor = "#a09465";
        document.getElementById("divClr5").style.backgroundColor ="#a09465";
    }else if(couleur2=='Ral 1023 - Jaune trafic'){

        document.getElementById("divClr").style.backgroundColor = "#f2bf00";
        document.getElementById("divClr1").style.backgroundColor = "#f2bf00";
        document.getElementById("divClr2").style.backgroundColor = "#f2bf00";
        document.getElementById("divClr3").style.backgroundColor = "#f2bf00";
        document.getElementById("divClr4").style.backgroundColor = "#f2bf00";
        document.getElementById("divClr5").style.backgroundColor ="#f2bf00";

    }else if(couleur2=='Ral 1024 - Jaune ocre'){

        document.getElementById("divClr").style.backgroundColor = "#b89650";
        document.getElementById("divClr1").style.backgroundColor = "#b89650";
        document.getElementById("divClr2").style.backgroundColor = "#b89650";
        document.getElementById("divClr3").style.backgroundColor = "#b89650";
        document.getElementById("divClr4").style.backgroundColor = "#b89650";
        document.getElementById("divClr5").style.backgroundColor ="#b89650";

    }else if(couleur2=='Ral 1027 - Jaune curry'){

        document.getElementById("divClr").style.backgroundColor = "#a4861a";
        document.getElementById("divClr1").style.backgroundColor = "#a4861a";
        document.getElementById("divClr2").style.backgroundColor = "#a4861a";
        document.getElementById("divClr3").style.backgroundColor = "#a4861a";
        document.getElementById("divClr4").style.backgroundColor = "#a4861a";
        document.getElementById("divClr5").style.backgroundColor ="#a4861a";

    }else if(couleur2=='Ral 1028 - Jaune melon'){

        document.getElementById("divClr").style.backgroundColor = "#ffa600";
        document.getElementById("divClr1").style.backgroundColor = "#ffa600";
        document.getElementById("divClr2").style.backgroundColor = "#ffa600";
        document.getElementById("divClr3").style.backgroundColor = "#ffa600";
        document.getElementById("divClr4").style.backgroundColor = "#ffa600";
        document.getElementById("divClr5").style.backgroundColor ="#ffa600";

    }else if(couleur2=='Ral 1032 - Jaune genêt'){

        document.getElementById("divClr").style.backgroundColor = "#e2ac00";
        document.getElementById("divClr1").style.backgroundColor = "#e2ac00";
        document.getElementById("divClr2").style.backgroundColor = "#e2ac00";
        document.getElementById("divClr3").style.backgroundColor = "#e2ac00";
        document.getElementById("divClr4").style.backgroundColor = "#e2ac00";
        document.getElementById("divClr5").style.backgroundColor ="#e2ac00";

    }else if(couleur2=='Ral 1033 - Jaune dahlia'){

        document.getElementById("divClr").style.backgroundColor = "#f7a11f";
        document.getElementById("divClr1").style.backgroundColor = "#f7a11f";
        document.getElementById("divClr2").style.backgroundColor = "#f7a11f";
        document.getElementById("divClr3").style.backgroundColor = "#f7a11f";
        document.getElementById("divClr4").style.backgroundColor = "#f7a11f";
        document.getElementById("divClr5").style.backgroundColor ="#f7a11f";

    }else if(couleur2=='Ral 1034 - Jaune pastel'){

        document.getElementById("divClr").style.backgroundColor = "#eba557";
        document.getElementById("divClr1").style.backgroundColor = "#eba557";
        document.getElementById("divClr2").style.backgroundColor = "#eba557";
        document.getElementById("divClr3").style.backgroundColor = "#eba557";
        document.getElementById("divClr4").style.backgroundColor = "#eba557";
        document.getElementById("divClr5").style.backgroundColor ="#eba557";

    }else if(couleur2=='Ral 2000 - Orangé jaune'){

        document.getElementById("divClr").style.backgroundColor = "#d97604";
        document.getElementById("divClr1").style.backgroundColor = "#d97604";
        document.getElementById("divClr2").style.backgroundColor = "#d97604";
        document.getElementById("divClr3").style.backgroundColor = "#d97604";
        document.getElementById("divClr4").style.backgroundColor = "#d97604";
        document.getElementById("divClr5").style.backgroundColor ="#d97604";

    }else if(couleur2=='Ral 2000 - Orangé jaune'){

        document.getElementById("divClr").style.backgroundColor = "#d97604";
        document.getElementById("divClr1").style.backgroundColor = "#d97604";
        document.getElementById("divClr2").style.backgroundColor = "#d97604";
        document.getElementById("divClr3").style.backgroundColor = "#d97604";
        document.getElementById("divClr4").style.backgroundColor = "#d97604";
        document.getElementById("divClr5").style.backgroundColor ="#d97604";

    }else if(couleur2=='Ral 2001 - Orangé rouge'){

        document.getElementById("divClr").style.backgroundColor = "#bb4926";
        document.getElementById("divClr1").style.backgroundColor = "#bb4926";
        document.getElementById("divClr2").style.backgroundColor = "#bb4926";
        document.getElementById("divClr3").style.backgroundColor = "#bb4926";
        document.getElementById("divClr4").style.backgroundColor = "#bb4926";
        document.getElementById("divClr5").style.backgroundColor ="#bb4926";

    }else if(couleur2=='Ral 2002 - Orangé sang'){

        document.getElementById("divClr").style.backgroundColor = "#c13524";
        document.getElementById("divClr1").style.backgroundColor = "#c13524";
        document.getElementById("divClr2").style.backgroundColor = "#c13524";
        document.getElementById("divClr3").style.backgroundColor = "#c13524";
        document.getElementById("divClr4").style.backgroundColor = "#c13524";
        document.getElementById("divClr5").style.backgroundColor ="#c13524";

    }else if(couleur2=='Ral 2003 - Orangé pastel'){

        document.getElementById("divClr").style.backgroundColor = "#f97a31";
        document.getElementById("divClr1").style.backgroundColor = "#f97a31";
        document.getElementById("divClr2").style.backgroundColor = "#f97a31";
        document.getElementById("divClr3").style.backgroundColor = "#f97a31";
        document.getElementById("divClr4").style.backgroundColor = "#f97a31";
        document.getElementById("divClr5").style.backgroundColor ="#f97a31";

    }else if(couleur2=='Ral 2004 - Orangé pur'){

        document.getElementById("divClr").style.backgroundColor = "#e8540d";
        document.getElementById("divClr1").style.backgroundColor = "#e8540d";
        document.getElementById("divClr2").style.backgroundColor = "#e8540d";
        document.getElementById("divClr3").style.backgroundColor = "#e8540d";
        document.getElementById("divClr4").style.backgroundColor = "#e8540d";
        document.getElementById("divClr5").style.backgroundColor ="#e8540d";

    }
    else if(couleur2=='Ral 2004 - Orangé pur'){

        document.getElementById("divClr").style.backgroundColor = "#f46f29";
        document.getElementById("divClr1").style.backgroundColor = "#f46f29";
        document.getElementById("divClr2").style.backgroundColor = "#f46f29";
        document.getElementById("divClr3").style.backgroundColor = "#f46f29";
        document.getElementById("divClr4").style.backgroundColor = "#f46f29";
        document.getElementById("divClr5").style.backgroundColor ="#f46f29";

    }else if(couleur2=='Ral 2009 - Orangé trafic'){

        document.getElementById("divClr").style.backgroundColor = "#db5316";
        document.getElementById("divClr1").style.backgroundColor = "#db5316";
        document.getElementById("divClr2").style.backgroundColor = "#db5316";
        document.getElementById("divClr3").style.backgroundColor = "#db5316";
        document.getElementById("divClr4").style.backgroundColor = "#db5316";
        document.getElementById("divClr5").style.backgroundColor ="#db5316";

    }else if(couleur2=='Ral 2010 - Orangé de sécurité'){

        document.getElementById("divClr").style.backgroundColor = "#d55d23";
        document.getElementById("divClr1").style.backgroundColor = "#d55d23";
        document.getElementById("divClr2").style.backgroundColor = "#d55d23";
        document.getElementById("divClr3").style.backgroundColor = "#d55d23";
        document.getElementById("divClr4").style.backgroundColor = "#d55d23";
        document.getElementById("divClr5").style.backgroundColor ="#d55d23";

    }
    else if(couleur2=='Ral 2011 - Orangé foncé'){

        document.getElementById("divClr").style.backgroundColor = "#ea7625";
        document.getElementById("divClr1").style.backgroundColor = "#ea7625";
        document.getElementById("divClr2").style.backgroundColor = "#ea7625";
        document.getElementById("divClr3").style.backgroundColor = "#ea7625";
        document.getElementById("divClr4").style.backgroundColor = "#ea7625";
        document.getElementById("divClr5").style.backgroundColor ="#ea7625";

    }else if(couleur2=='Ral 2012 - Orangé saumon'){

        document.getElementById("divClr").style.backgroundColor = "#d6654e";
        document.getElementById("divClr1").style.backgroundColor = "#d6654e";
        document.getElementById("divClr2").style.backgroundColor = "#d6654e";
        document.getElementById("divClr3").style.backgroundColor = "#d6654e";
        document.getElementById("divClr4").style.backgroundColor = "#d6654e";
        document.getElementById("divClr5").style.backgroundColor ="#d6654e";

    }else if(couleur2=='Ral 2100 - Noir profond'){

        document.getElementById("divClr").style.backgroundColor = "#151619";
        document.getElementById("divClr1").style.backgroundColor = "#151619";
        document.getElementById("divClr2").style.backgroundColor = "#151619";
        document.getElementById("divClr3").style.backgroundColor = "#151619";
        document.getElementById("divClr4").style.backgroundColor = "#151619";
        document.getElementById("divClr5").style.backgroundColor ="#151619";

    }
    else if(couleur2=='Ral 3000 - Rouge feu'){

        document.getElementById("divClr").style.backgroundColor = "#a02725";
        document.getElementById("divClr1").style.backgroundColor = "#a02725";
        document.getElementById("divClr2").style.backgroundColor = "#a02725";
        document.getElementById("divClr3").style.backgroundColor = "#a02725";
        document.getElementById("divClr4").style.backgroundColor = "#a02725";
        document.getElementById("divClr5").style.backgroundColor ="#a02725";

    }else if(couleur2=='Ral 3001 - Rouge de sécurité'){

        document.getElementById("divClr").style.backgroundColor = "#a0001c";
        document.getElementById("divClr1").style.backgroundColor = "#a0001c";
        document.getElementById("divClr2").style.backgroundColor = "#a0001c";
        document.getElementById("divClr3").style.backgroundColor = "#a0001c";
        document.getElementById("divClr4").style.backgroundColor = "#a0001c";
        document.getElementById("divClr5").style.backgroundColor ="#a0001c";

    }else if(couleur2=='Ral 3002 - Rouge carmin'){

        document.getElementById("divClr").style.backgroundColor = "#991424";
        document.getElementById("divClr1").style.backgroundColor = "#991424";
        document.getElementById("divClr2").style.backgroundColor = "#991424";
        document.getElementById("divClr3").style.backgroundColor = "#991424";
        document.getElementById("divClr4").style.backgroundColor = "#991424";
        document.getElementById("divClr5").style.backgroundColor ="#991424";

    }else if(couleur2=='Ral 3003 - Rouge rubis'){

        document.getElementById("divClr").style.backgroundColor = "#870a24";
        document.getElementById("divClr1").style.backgroundColor = "#870a24";
        document.getElementById("divClr2").style.backgroundColor = "#870a24";
        document.getElementById("divClr3").style.backgroundColor = "#870a24";
        document.getElementById("divClr4").style.backgroundColor = "#870a24";
        document.getElementById("divClr5").style.backgroundColor ="#870a24";

    }
    else if(couleur2=='Ral 3004 - Rouge pourpre'){

        document.getElementById("divClr").style.backgroundColor = "#6c1b2a";
        document.getElementById("divClr1").style.backgroundColor = "#6c1b2a";
        document.getElementById("divClr2").style.backgroundColor = "#6c1b2a";
        document.getElementById("divClr3").style.backgroundColor = "#6c1b2a";
        document.getElementById("divClr4").style.backgroundColor = "#6c1b2a";
        document.getElementById("divClr5").style.backgroundColor ="#6c1b2a";

    }else if(couleur2=='Ral 3005 - Rouge vin'){

        document.getElementById("divClr").style.backgroundColor = "#581e29";
        document.getElementById("divClr1").style.backgroundColor = "#581e29";
        document.getElementById("divClr2").style.backgroundColor = "#581e29";
        document.getElementById("divClr3").style.backgroundColor = "#581e29";
        document.getElementById("divClr4").style.backgroundColor = "#581e29";
        document.getElementById("divClr5").style.backgroundColor ="#581e29";

    }else if(couleur2=='Ral 3007 - Rouge noir'){

        document.getElementById("divClr").style.backgroundColor = "#402226";
        document.getElementById("divClr1").style.backgroundColor = "#402226";
        document.getElementById("divClr2").style.backgroundColor = "#402226";
        document.getElementById("divClr3").style.backgroundColor = "#402226";
        document.getElementById("divClr4").style.backgroundColor = "#402226";
        document.getElementById("divClr5").style.backgroundColor ="#402226";

    }else if(couleur2=='Ral 3009 - Rouge oxyde'){

        document.getElementById("divClr").style.backgroundColor = "#6d312b";
        document.getElementById("divClr1").style.backgroundColor = "#6d312b";
        document.getElementById("divClr2").style.backgroundColor = "#6d312b";
        document.getElementById("divClr3").style.backgroundColor = "#6d312b";
        document.getElementById("divClr4").style.backgroundColor = "#6d312b";
        document.getElementById("divClr5").style.backgroundColor ="#6d312b";

    }
    else if(couleur2=='Ral 3011 - Rouge brun'){

        document.getElementById("divClr").style.backgroundColor = "#791f24";
        document.getElementById("divClr1").style.backgroundColor = "#791f24";
        document.getElementById("divClr2").style.backgroundColor = "#791f24";
        document.getElementById("divClr3").style.backgroundColor = "#791f24";
        document.getElementById("divClr4").style.backgroundColor = "#791f24";
        document.getElementById("divClr5").style.backgroundColor ="#791f24";

    }else if(couleur2=='Ral 3012 - Rouge beige'){

        document.getElementById("divClr").style.backgroundColor = "#c68873";
        document.getElementById("divClr1").style.backgroundColor = "#c68873";
        document.getElementById("divClr2").style.backgroundColor = "#c68873";
        document.getElementById("divClr3").style.backgroundColor = "#c68873";
        document.getElementById("divClr4").style.backgroundColor = "#c68873";
        document.getElementById("divClr5").style.backgroundColor ="#c68873";

    }else if(couleur2=='Ral 3013 - Rouge tomate'){

        document.getElementById("divClr").style.backgroundColor = "#992a28";
        document.getElementById("divClr1").style.backgroundColor = "#992a28";
        document.getElementById("divClr2").style.backgroundColor = "#992a28";
        document.getElementById("divClr3").style.backgroundColor = "#992a28";
        document.getElementById("divClr4").style.backgroundColor = "#992a28";
        document.getElementById("divClr5").style.backgroundColor ="#992a28";

    }else if(couleur2=='Ral 3014 - Vieux rose'){

        document.getElementById("divClr").style.backgroundColor = "#cf7278";
        document.getElementById("divClr1").style.backgroundColor = "#cf7278";
        document.getElementById("divClr2").style.backgroundColor = "#cf7278";
        document.getElementById("divClr3").style.backgroundColor = "#cf7278";
        document.getElementById("divClr4").style.backgroundColor = "#cf7278";
        document.getElementById("divClr5").style.backgroundColor ="#cf7278";

    }else if(couleur2=='Ral 3015 - Rose clair'){

        document.getElementById("divClr").style.backgroundColor = "#e3a0ac";
        document.getElementById("divClr1").style.backgroundColor = "#e3a0ac";
        document.getElementById("divClr2").style.backgroundColor = "#e3a0ac";
        document.getElementById("divClr3").style.backgroundColor = "#e3a0ac";
        document.getElementById("divClr4").style.backgroundColor = "#e3a0ac";
        document.getElementById("divClr5").style.backgroundColor ="#e3a0ac";

    }else if(couleur2=='Ral 3016 - Rouge corail'){

        document.getElementById("divClr").style.backgroundColor = "#ab392d";
        document.getElementById("divClr1").style.backgroundColor = "#ab392d";
        document.getElementById("divClr2").style.backgroundColor = "#ab392d";
        document.getElementById("divClr3").style.backgroundColor = "#ab392d";
        document.getElementById("divClr4").style.backgroundColor = "#ab392d";
        document.getElementById("divClr5").style.backgroundColor ="#ab392d";

    }else if(couleur2=='Ral 3017 - Rosé'){

        document.getElementById("divClr").style.backgroundColor = "#cc515e";
        document.getElementById("divClr1").style.backgroundColor = "#cc515e";
        document.getElementById("divClr2").style.backgroundColor = "#cc515e";
        document.getElementById("divClr3").style.backgroundColor = "#cc515e";
        document.getElementById("divClr4").style.backgroundColor = "#cc515e";
        document.getElementById("divClr5").style.backgroundColor ="#cc515e";

    }
    else if(couleur2=='Ral 3018 - Rouge fraise'){

        document.getElementById("divClr").style.backgroundColor = "#ca3f5";
        document.getElementById("divClr1").style.backgroundColor = "#ca3f5";
        document.getElementById("divClr2").style.backgroundColor = "#ca3f5";
        document.getElementById("divClr3").style.backgroundColor = "#ca3f5";
        document.getElementById("divClr4").style.backgroundColor = "#ca3f5";
        document.getElementById("divClr5").style.backgroundColor ="#ca3f5";

    }else if(couleur2=='Ral 3018 - Rouge fraise'){

        document.getElementById("divClr").style.backgroundColor = "#bf111b";
        document.getElementById("divClr1").style.backgroundColor = "#bf111b";
        document.getElementById("divClr2").style.backgroundColor = "#bf111b";
        document.getElementById("divClr3").style.backgroundColor = "#bf111b";
        document.getElementById("divClr4").style.backgroundColor = "#bf111b";
        document.getElementById("divClr5").style.backgroundColor ="#bf111b";

    }else if(couleur2=='Ral 3022 - Rouge saumon'){
        document.getElementById("divClr").style.backgroundColor = "#d36b56";
        document.getElementById("divClr1").style.backgroundColor = "#d36b56";
        document.getElementById("divClr2").style.backgroundColor = "#d36b56";
        document.getElementById("divClr3").style.backgroundColor = "#d36b56";
        document.getElementById("divClr4").style.backgroundColor = "#d36b56";
        document.getElementById("divClr5").style.backgroundColor ="#d36b56";

    }else if(couleur2=='Ral 3027 - Rouge framboise'){
        document.getElementById("divClr").style.backgroundColor = "#d36b56";
        document.getElementById("divClr1").style.backgroundColor = "#d36b56";
        document.getElementById("divClr2").style.backgroundColor = "#d36b56";
        document.getElementById("divClr3").style.backgroundColor = "#d36b56";
        document.getElementById("divClr4").style.backgroundColor = "#d36b56";
        document.getElementById("divClr5").style.backgroundColor ="#d36b56";

    }
    else if(couleur2=='Ral 3031 - Rouge oriental'){
        document.getElementById("divClr").style.backgroundColor = "#a7323e";
        document.getElementById("divClr1").style.backgroundColor = "#a7323e";
        document.getElementById("divClr2").style.backgroundColor = "#a7323e";
        document.getElementById("divClr3").style.backgroundColor = "#a7323e";
        document.getElementById("divClr4").style.backgroundColor = "#a7323e";
        document.getElementById("divClr5").style.backgroundColor ="#a7323e";

    }
    else if(couleur2=='Ral 4001 - Lilas rouge'){
        document.getElementById("divClr").style.backgroundColor = "#865d86";
        document.getElementById("divClr1").style.backgroundColor = "#865d86";
        document.getElementById("divClr2").style.backgroundColor = "#865d86";
        document.getElementById("divClr3").style.backgroundColor = "#865d86";
        document.getElementById("divClr4").style.backgroundColor = "#865d86";
        document.getElementById("divClr5").style.backgroundColor ="#865d86";

    }
    else if(couleur2=='Ral 4002 - Violet rouge'){
        document.getElementById("divClr").style.backgroundColor = "#8f3f51";
        document.getElementById("divClr1").style.backgroundColor = "#8f3f51";
        document.getElementById("divClr2").style.backgroundColor = "#8f3f51";
        document.getElementById("divClr3").style.backgroundColor = "#8f3f51";
        document.getElementById("divClr4").style.backgroundColor = "#8f3f51";
        document.getElementById("divClr5").style.backgroundColor ="#8f3f51";

    }else if(couleur2=='Ral 4003 - Violet bruyère'){
        document.getElementById("divClr").style.backgroundColor = "#ca5b91";
        document.getElementById("divClr1").style.backgroundColor = "#ca5b91";
        document.getElementById("divClr2").style.backgroundColor = "#ca5b91";
        document.getElementById("divClr3").style.backgroundColor = "#ca5b91";
        document.getElementById("divClr4").style.backgroundColor = "#ca5b91";
        document.getElementById("divClr5").style.backgroundColor ="#ca5b91";

    }else if(couleur2=='Ral 4004 - Violet bordeaux'){
        document.getElementById("divClr").style.backgroundColor = "#69193b";
        document.getElementById("divClr1").style.backgroundColor = "#69193b";
        document.getElementById("divClr2").style.backgroundColor = "#69193b";
        document.getElementById("divClr3").style.backgroundColor = "#69193b";
        document.getElementById("divClr4").style.backgroundColor = "#69193b";
        document.getElementById("divClr5").style.backgroundColor ="#69193b";

    }else if(couleur2=='Ral 4005 - Lilas bleu'){
        document.getElementById("divClr").style.backgroundColor = "#7e63a1";
        document.getElementById("divClr1").style.backgroundColor = "#7e63a1";
        document.getElementById("divClr2").style.backgroundColor = "#7e63a1";
        document.getElementById("divClr3").style.backgroundColor = "#7e63a1";
        document.getElementById("divClr4").style.backgroundColor = "#7e63a1";
        document.getElementById("divClr5").style.backgroundColor ="#7e63a1";

    }
    else if(couleur2=='Ral 4006 - Pourpre trafic'){
        document.getElementById("divClr").style.backgroundColor = "#912d76";
        document.getElementById("divClr1").style.backgroundColor = "#912d76";
        document.getElementById("divClr2").style.backgroundColor = "#912d76";
        document.getElementById("divClr3").style.backgroundColor = "#912d76";
        document.getElementById("divClr4").style.backgroundColor = "#912d76";
        document.getElementById("divClr5").style.backgroundColor ="#912d76";

    }else if(couleur2=='Ral 4007 - Violet pourpre'){
        document.getElementById("divClr").style.backgroundColor = "#48233e";
        document.getElementById("divClr1").style.backgroundColor = "#48233e";
        document.getElementById("divClr2").style.backgroundColor = "#48233e";
        document.getElementById("divClr3").style.backgroundColor = "#48233e";
        document.getElementById("divClr4").style.backgroundColor = "#48233e";
        document.getElementById("divClr5").style.backgroundColor ="#48233e";

    }else if(couleur2=='Ral 4008 - Violet de sécurité'){
        document.getElementById("divClr").style.backgroundColor = "#853d7d";
        document.getElementById("divClr1").style.backgroundColor = "#853d7d";
        document.getElementById("divClr2").style.backgroundColor = "#853d7d";
        document.getElementById("divClr3").style.backgroundColor = "#853d7d";
        document.getElementById("divClr4").style.backgroundColor = "#853d7d";
        document.getElementById("divClr5").style.backgroundColor ="#853d7d";

    }else if(couleur2=='Ral 4009 - Violet pastel'){
        document.getElementById("divClr").style.backgroundColor = "#9d8493";
        document.getElementById("divClr1").style.backgroundColor = "#9d8493";
        document.getElementById("divClr2").style.backgroundColor = "#9d8493";
        document.getElementById("divClr3").style.backgroundColor = "#9d8493";
        document.getElementById("divClr4").style.backgroundColor = "#9d8493";
        document.getElementById("divClr5").style.backgroundColor ="#9d8493";

    }else if(couleur2=='Ral 5000 - Bleu violet'){
        document.getElementById("divClr").style.backgroundColor = "#2f4a71";
        document.getElementById("divClr1").style.backgroundColor = "#2f4a71";
        document.getElementById("divClr2").style.backgroundColor = "#2f4a71";
        document.getElementById("divClr3").style.backgroundColor = "#2f4a71";
        document.getElementById("divClr4").style.backgroundColor = "#2f4a71";
        document.getElementById("divClr5").style.backgroundColor ="#2f4a71";

    }else if(couleur2=='Ral 5001 - Bleu vert'){
        document.getElementById("divClr").style.backgroundColor = "#0e4666";
        document.getElementById("divClr1").style.backgroundColor = "#0e4666";
        document.getElementById("divClr2").style.backgroundColor = "#0e4666";
        document.getElementById("divClr3").style.backgroundColor = "#0e4666";
        document.getElementById("divClr4").style.backgroundColor = "#0e4666";
        document.getElementById("divClr5").style.backgroundColor ="#0e4666";

    }else if(couleur2=='Ral 5002 - Bleu outremer'){
        document.getElementById("divClr").style.backgroundColor = "#162e7b";
        document.getElementById("divClr1").style.backgroundColor = "#162e7b";
        document.getElementById("divClr2").style.backgroundColor = "#162e7b";
        document.getElementById("divClr3").style.backgroundColor = "#162e7b";
        document.getElementById("divClr4").style.backgroundColor = "#162e7b";
        document.getElementById("divClr5").style.backgroundColor ="#162e7b";

    }else if(couleur2=='Ral 5003 - Bleu saphir'){
        document.getElementById("divClr").style.backgroundColor = "#193058";
        document.getElementById("divClr1").style.backgroundColor = "#193058";
        document.getElementById("divClr2").style.backgroundColor = "#193058";
        document.getElementById("divClr3").style.backgroundColor = "#193058";
        document.getElementById("divClr4").style.backgroundColor = "#193058";
        document.getElementById("divClr5").style.backgroundColor ="#193058";

    }else if(couleur2=='Ral 5004 - Bleu noir'){
        document.getElementById("divClr").style.backgroundColor = "#1a1d2a";
        document.getElementById("divClr1").style.backgroundColor = "#1a1d2a";
        document.getElementById("divClr2").style.backgroundColor = "#1a1d2a";
        document.getElementById("divClr3").style.backgroundColor = "#1a1d2a";
        document.getElementById("divClr4").style.backgroundColor = "#1a1d2a";
        document.getElementById("divClr5").style.backgroundColor ="#1a1d2a";

    }else if(couleur2=='Ral 5005 - Bleu de sécurité'){
        document.getElementById("divClr").style.backgroundColor = "#004389";
        document.getElementById("divClr1").style.backgroundColor = "#004389";
        document.getElementById("divClr2").style.backgroundColor = "#004389";
        document.getElementById("divClr3").style.backgroundColor = "#004389";
        document.getElementById("divClr4").style.backgroundColor = "#004389";
        document.getElementById("divClr5").style.backgroundColor ="#004389";

    }else if(couleur2=='Ral 5007 - Bleu brillant'){
        document.getElementById("divClr").style.backgroundColor = "#38618c";
        document.getElementById("divClr1").style.backgroundColor = "#38618c";
        document.getElementById("divClr2").style.backgroundColor = "#38618c";
        document.getElementById("divClr3").style.backgroundColor = "#38618c";
        document.getElementById("divClr4").style.backgroundColor = "#38618c";
        document.getElementById("divClr5").style.backgroundColor ="#38618c";

    }else if(couleur2=='Ral 5008 - Bleu gris'){
        document.getElementById("divClr").style.backgroundColor = "#2d3944";
        document.getElementById("divClr1").style.backgroundColor = "#2d3944";
        document.getElementById("divClr2").style.backgroundColor = "#2d3944";
        document.getElementById("divClr3").style.backgroundColor = "#2d3944";
        document.getElementById("divClr4").style.backgroundColor = "#2d3944";
        document.getElementById("divClr5").style.backgroundColor ="#2d3944";

    }else if(couleur2=='Ral 5009 - Bleu azur'){
        document.getElementById("divClr").style.backgroundColor = "#245878";
        document.getElementById("divClr1").style.backgroundColor = "#245878";
        document.getElementById("divClr2").style.backgroundColor = "#245878";
        document.getElementById("divClr3").style.backgroundColor = "#245878";
        document.getElementById("divClr4").style.backgroundColor = "#245878";
        document.getElementById("divClr5").style.backgroundColor ="#245878";

    }else if(couleur2=='Ral 5010 - Bleu gentiane'){
        document.getElementById("divClr").style.backgroundColor = "#00427f";
        document.getElementById("divClr1").style.backgroundColor = "#00427f";
        document.getElementById("divClr2").style.backgroundColor = "#00427f";
        document.getElementById("divClr3").style.backgroundColor = "#00427f";
        document.getElementById("divClr4").style.backgroundColor = "#00427f";
        document.getElementById("divClr5").style.backgroundColor ="#00427f";

    }else if(couleur2=='Ral 5011 - Bleu acier'){
        document.getElementById("divClr").style.backgroundColor = "#1a2740";
        document.getElementById("divClr1").style.backgroundColor = "#1a2740";
        document.getElementById("divClr2").style.backgroundColor = "#1a2740";
        document.getElementById("divClr3").style.backgroundColor = "#1a2740";
        document.getElementById("divClr4").style.backgroundColor = "#1a2740";
        document.getElementById("divClr5").style.backgroundColor ="#1a2740";

    }else if(couleur2=='Ral 5012 - Bleu clair'){
        document.getElementById("divClr").style.backgroundColor = "#2781bb";
        document.getElementById("divClr1").style.backgroundColor = "#2781bb";
        document.getElementById("divClr2").style.backgroundColor = "#2781bb";
        document.getElementById("divClr3").style.backgroundColor = "#2781bb";
        document.getElementById("divClr4").style.backgroundColor = "#2781bb";
        document.getElementById("divClr5").style.backgroundColor ="#2781bb";

    }else if(couleur2=='Ral 5013 - Bleu cobalt'){
        document.getElementById("divClr").style.backgroundColor = "#2781bb";
        document.getElementById("divClr1").style.backgroundColor = "#2781bb";
        document.getElementById("divClr2").style.backgroundColor = "#2781bb";
        document.getElementById("divClr3").style.backgroundColor = "#2781bb";
        document.getElementById("divClr4").style.backgroundColor = "#2781bb";
        document.getElementById("divClr5").style.backgroundColor ="#2781bb";

    }else if(couleur2=='Ral 5014 - Bleu pigeon'){
        document.getElementById("divClr").style.backgroundColor = "#667b9a";
        document.getElementById("divClr1").style.backgroundColor = "#667b9a";
        document.getElementById("divClr2").style.backgroundColor = "#667b9a";
        document.getElementById("divClr3").style.backgroundColor = "#667b9a";
        document.getElementById("divClr4").style.backgroundColor = "#667b9a";
        document.getElementById("divClr5").style.backgroundColor ="#667b9a";

    }else if(couleur2=='Ral 5015 - Bleu ciel'){
        document.getElementById("divClr").style.backgroundColor = "#0071b5";
        document.getElementById("divClr1").style.backgroundColor = "#0071b5";
        document.getElementById("divClr2").style.backgroundColor = "#0071b5";
        document.getElementById("divClr3").style.backgroundColor = "#0071b5";
        document.getElementById("divClr4").style.backgroundColor = "#0071b5";
        document.getElementById("divClr5").style.backgroundColor ="#0071b5";

    }else if(couleur2=='Ral 5017 - Ral 501'){
        document.getElementById("divClr").style.backgroundColor = "#004c91";
        document.getElementById("divClr1").style.backgroundColor = "#004c91";
        document.getElementById("divClr2").style.backgroundColor = "#004c91";
        document.getElementById("divClr3").style.backgroundColor = "#004c91";
        document.getElementById("divClr4").style.backgroundColor = "#004c91";
        document.getElementById("divClr5").style.backgroundColor ="#004c91";

    }else if(couleur2=='Ral 5018 - Bleu turquoise'){
        document.getElementById("divClr").style.backgroundColor = "#138992";
        document.getElementById("divClr1").style.backgroundColor = "#138992";
        document.getElementById("divClr2").style.backgroundColor = "#138992";
        document.getElementById("divClr3").style.backgroundColor = "#138992";
        document.getElementById("divClr4").style.backgroundColor = "#138992";
        document.getElementById("divClr5").style.backgroundColor ="#138992";

    }else if(couleur2=='Ral 5019 - Bleu capri'){
        document.getElementById("divClr").style.backgroundColor = "#005688";
        document.getElementById("divClr1").style.backgroundColor = "#005688";
        document.getElementById("divClr2").style.backgroundColor = "#005688";
        document.getElementById("divClr3").style.backgroundColor = "#005688";
        document.getElementById("divClr4").style.backgroundColor = "#005688";
        document.getElementById("divClr5").style.backgroundColor ="#005688";

    }else if(couleur2=='Ral 5020 - Bleu océan'){
        document.getElementById("divClr").style.backgroundColor = "#00747d";
        document.getElementById("divClr1").style.backgroundColor = "#00747d";
        document.getElementById("divClr2").style.backgroundColor = "#00747d";
        document.getElementById("divClr3").style.backgroundColor = "#00747d";
        document.getElementById("divClr4").style.backgroundColor = "#00747d";
        document.getElementById("divClr5").style.backgroundColor ="#00747d";

    }else if(couleur2=='Ral 5021 - Bleu eau'){
        document.getElementById("divClr").style.backgroundColor = "#00747d";
        document.getElementById("divClr1").style.backgroundColor = "#00747d";
        document.getElementById("divClr2").style.backgroundColor = "#00747d";
        document.getElementById("divClr3").style.backgroundColor = "#00747d";
        document.getElementById("divClr4").style.backgroundColor = "#00747d";
        document.getElementById("divClr5").style.backgroundColor ="#00747d";

    }else if(couleur2=='Ral 5022 - Bleu nocturne'){
        document.getElementById("divClr").style.backgroundColor = "#28275a";
        document.getElementById("divClr1").style.backgroundColor = "#28275a";
        document.getElementById("divClr2").style.backgroundColor = "#28275a";
        document.getElementById("divClr3").style.backgroundColor = "#28275a";
        document.getElementById("divClr4").style.backgroundColor = "#28275a";
        document.getElementById("divClr5").style.backgroundColor ="#28275a";

    }
    else if(couleur2=='Ral 5023 - Bleu distant'){
        document.getElementById("divClr").style.backgroundColor = "#486591";
        document.getElementById("divClr1").style.backgroundColor = "#486591";
        document.getElementById("divClr2").style.backgroundColor = "#486591";
        document.getElementById("divClr3").style.backgroundColor = "#486591";
        document.getElementById("divClr4").style.backgroundColor = "#486591";
        document.getElementById("divClr5").style.backgroundColor ="#486591";

    }else if(couleur2=='Ral 5024 - Bleu pastel'){
        document.getElementById("divClr").style.backgroundColor = "#6391b0";
        document.getElementById("divClr1").style.backgroundColor = "#6391b0";
        document.getElementById("divClr2").style.backgroundColor = "#6391b0";
        document.getElementById("divClr3").style.backgroundColor = "#6391b0";
        document.getElementById("divClr4").style.backgroundColor = "#6391b0";
        document.getElementById("divClr5").style.backgroundColor ="#6391b0";

    }else if(couleur2=='Ral 6000 - Vert platine'){
        document.getElementById("divClr").style.backgroundColor = "#327663";
        document.getElementById("divClr1").style.backgroundColor = "#327663";
        document.getElementById("divClr2").style.backgroundColor = "#327663";
        document.getElementById("divClr3").style.backgroundColor = "#327663";
        document.getElementById("divClr4").style.backgroundColor = "#327663";
        document.getElementById("divClr5").style.backgroundColor ="#327663";

    }else if(couleur2=='Ral 6001 - Vert émeraude'){
        document.getElementById("divClr").style.backgroundColor = "#266d3b";
        document.getElementById("divClr1").style.backgroundColor = "#266d3b";
        document.getElementById("divClr2").style.backgroundColor = "#266d3b";
        document.getElementById("divClr3").style.backgroundColor = "#266d3b";
        document.getElementById("divClr4").style.backgroundColor = "#266d3b";
        document.getElementById("divClr5").style.backgroundColor ="#266d3b";

    }else if(couleur2=='Ral 6002 - Vert feuillage'){
        document.getElementById("divClr").style.backgroundColor = "#276230";
        document.getElementById("divClr1").style.backgroundColor = "#276230";
        document.getElementById("divClr2").style.backgroundColor = "#276230";
        document.getElementById("divClr3").style.backgroundColor = "#276230";
        document.getElementById("divClr4").style.backgroundColor = "#276230";
        document.getElementById("divClr5").style.backgroundColor ="#276230";

    }else if(couleur2=='Ral 6003 - Vert olive'){
        document.getElementById("divClr").style.backgroundColor = "#4e553d";
        document.getElementById("divClr1").style.backgroundColor = "#4e553d";
        document.getElementById("divClr2").style.backgroundColor = "#4e553d";
        document.getElementById("divClr3").style.backgroundColor = "#4e553d";
        document.getElementById("divClr4").style.backgroundColor = "#4e553d";
        document.getElementById("divClr5").style.backgroundColor ="#4e553d";

    }else if(couleur2=='Ral 6004 - Vert bleu'){
        document.getElementById("divClr").style.backgroundColor = "#004547";
        document.getElementById("divClr1").style.backgroundColor = "#004547";
        document.getElementById("divClr2").style.backgroundColor = "#004547";
        document.getElementById("divClr3").style.backgroundColor = "#004547";
        document.getElementById("divClr4").style.backgroundColor = "#004547";
        document.getElementById("divClr5").style.backgroundColor ="#004547";

    }else if(couleur2=='Ral 6005 - Vert mousse'){
        document.getElementById("divClr").style.backgroundColor = "#0e4438";
        document.getElementById("divClr1").style.backgroundColor = "#0e4438";
        document.getElementById("divClr2").style.backgroundColor = "#0e4438";
        document.getElementById("divClr3").style.backgroundColor = "#0e4438";
        document.getElementById("divClr4").style.backgroundColor = "#0e4438";
        document.getElementById("divClr5").style.backgroundColor ="#0e4438";

    }else if(couleur2=='Ral 6006 - Olive gris'){
        document.getElementById("divClr").style.backgroundColor = "#3b3d33";
        document.getElementById("divClr1").style.backgroundColor = "#3b3d33";
        document.getElementById("divClr2").style.backgroundColor = "#3b3d33";
        document.getElementById("divClr3").style.backgroundColor = "#3b3d33";
        document.getElementById("divClr4").style.backgroundColor = "#3b3d33";
        document.getElementById("divClr5").style.backgroundColor ="#3b3d33";

    }else if(couleur2=='Ral 6007 - Vert bouteille'){
        document.getElementById("divClr").style.backgroundColor = "#2b3626";
        document.getElementById("divClr1").style.backgroundColor = "#2b3626";
        document.getElementById("divClr2").style.backgroundColor = "#2b3626";
        document.getElementById("divClr3").style.backgroundColor = "#2b3626";
        document.getElementById("divClr4").style.backgroundColor = "#2b3626";
        document.getElementById("divClr5").style.backgroundColor ="#2b3626";

    }else if(couleur2=='Ral 6008 - Vert brun'){
        document.getElementById("divClr").style.backgroundColor = "#302f22";
        document.getElementById("divClr1").style.backgroundColor = "#302f22";
        document.getElementById("divClr2").style.backgroundColor = "#302f22";
        document.getElementById("divClr3").style.backgroundColor = "#302f22";
        document.getElementById("divClr4").style.backgroundColor = "#302f22";
        document.getElementById("divClr5").style.backgroundColor ="#302f22";

    }else if(couleur2=='Ral 6009 - Vert sapin'){
        document.getElementById("divClr").style.backgroundColor = "#213529";
        document.getElementById("divClr1").style.backgroundColor = "#213529";
        document.getElementById("divClr2").style.backgroundColor = "#213529";
        document.getElementById("divClr3").style.backgroundColor = "#213529";
        document.getElementById("divClr4").style.backgroundColor = "#213529";
        document.getElementById("divClr5").style.backgroundColor ="#213529";

    }else if(couleur2=='Ral 6009 - Vert sapin'){
        document.getElementById("divClr").style.backgroundColor = "#426e38";
        document.getElementById("divClr1").style.backgroundColor = "#426e38";
        document.getElementById("divClr2").style.backgroundColor = "#426e38";
        document.getElementById("divClr3").style.backgroundColor = "#426e38";
        document.getElementById("divClr4").style.backgroundColor = "#426e38";
        document.getElementById("divClr5").style.backgroundColor ="#426e38";

    }else if(couleur2=='Ral 6010 - Vert herbe'){
        document.getElementById("divClr").style.backgroundColor = "#426e38";
        document.getElementById("divClr1").style.backgroundColor = "#426e38";
        document.getElementById("divClr2").style.backgroundColor = "#426e38";
        document.getElementById("divClr3").style.backgroundColor = "#426e38";
        document.getElementById("divClr4").style.backgroundColor = "#426e38";
        document.getElementById("divClr5").style.backgroundColor ="#426e38";

    }
    else if(couleur2=='Ral 6011 - Vert réséda'){
        document.getElementById("divClr").style.backgroundColor = "#68825f";
        document.getElementById("divClr1").style.backgroundColor = "#68825f";
        document.getElementById("divClr2").style.backgroundColor = "#68825f";
        document.getElementById("divClr3").style.backgroundColor = "#68825f";
        document.getElementById("divClr4").style.backgroundColor = "#68825f";
        document.getElementById("divClr5").style.backgroundColor ="#68825f";

    }else if(couleur2=='Ral 6012 - Vert noir'){
        document.getElementById("divClr").style.backgroundColor = "#293a37";
        document.getElementById("divClr1").style.backgroundColor = "#293a37";
        document.getElementById("divClr2").style.backgroundColor = "#293a37";
        document.getElementById("divClr3").style.backgroundColor = "#293a37";
        document.getElementById("divClr4").style.backgroundColor = "#293a37";
        document.getElementById("divClr5").style.backgroundColor ="#293a37";

    }else if(couleur2=='Ral 6013 - Vert jonc'){
        document.getElementById("divClr").style.backgroundColor = "#76785b";
        document.getElementById("divClr1").style.backgroundColor = "#76785b";
        document.getElementById("divClr2").style.backgroundColor = "#76785b";
        document.getElementById("divClr3").style.backgroundColor = "#76785b";
        document.getElementById("divClr4").style.backgroundColor = "#76785b";
        document.getElementById("divClr5").style.backgroundColor ="#76785b";

    }else if(couleur2=='Ral 6014 - Olive jaune'){
        document.getElementById("divClr").style.backgroundColor = "#443f31";
        document.getElementById("divClr1").style.backgroundColor = "#443f31";
        document.getElementById("divClr2").style.backgroundColor = "#443f31";
        document.getElementById("divClr3").style.backgroundColor = "#443f31";
        document.getElementById("divClr4").style.backgroundColor = "#443f31";
        document.getElementById("divClr5").style.backgroundColor ="#443f31";

    }else if(couleur2=='Ral 6015 - Olive noir'){
        document.getElementById("divClr").style.backgroundColor = "#383b34";
        document.getElementById("divClr1").style.backgroundColor = "#383b34";
        document.getElementById("divClr2").style.backgroundColor = "#383b34";
        document.getElementById("divClr3").style.backgroundColor = "#383b34";
        document.getElementById("divClr4").style.backgroundColor = "#383b34";
        document.getElementById("divClr5").style.backgroundColor ="#383b34";

    }else if(couleur2=='Ral 6016 - Vert turquoise'){
        document.getElementById("divClr").style.backgroundColor = "#00664f";
        document.getElementById("divClr1").style.backgroundColor = "#00664f";
        document.getElementById("divClr2").style.backgroundColor = "#00664f";
        document.getElementById("divClr3").style.backgroundColor = "#00664f";
        document.getElementById("divClr4").style.backgroundColor = "#00664f";
        document.getElementById("divClr5").style.backgroundColor ="#00664f";

    }else if(couleur2=='Ral 6017 - Vert mai'){
        document.getElementById("divClr").style.backgroundColor = "#4d8542";
        document.getElementById("divClr1").style.backgroundColor = "#4d8542";
        document.getElementById("divClr2").style.backgroundColor = "#4d8542";
        document.getElementById("divClr3").style.backgroundColor = "#4d8542";
        document.getElementById("divClr4").style.backgroundColor = "#4d8542";
        document.getElementById("divClr5").style.backgroundColor ="#4d8542";

    }else if(couleur2=='Ral 6018 - Vert jaune'){
        document.getElementById("divClr").style.backgroundColor = "#4b9b3e";
        document.getElementById("divClr1").style.backgroundColor = "#4b9b3e";
        document.getElementById("divClr2").style.backgroundColor = "#4b9b3e";
        document.getElementById("divClr3").style.backgroundColor = "#4b9b3e";
        document.getElementById("divClr4").style.backgroundColor = "#4b9b3e";
        document.getElementById("divClr5").style.backgroundColor ="#4b9b3e";

    }else if(couleur2=='Ral 6019 - Vert blanc'){
        document.getElementById("divClr").style.backgroundColor = "#b2d8b4";
        document.getElementById("divClr1").style.backgroundColor = "#b2d8b4";
        document.getElementById("divClr2").style.backgroundColor = "#b2d8b4";
        document.getElementById("divClr3").style.backgroundColor = "#b2d8b4";
        document.getElementById("divClr4").style.backgroundColor = "#b2d8b4";
        document.getElementById("divClr5").style.backgroundColor ="#b2d8b4";

    }else if(couleur2=='Ral 6020 - Oxyde chromique'){
        document.getElementById("divClr").style.backgroundColor = "#394937";
        document.getElementById("divClr1").style.backgroundColor = "#394937";
        document.getElementById("divClr2").style.backgroundColor = "#394937";
        document.getElementById("divClr3").style.backgroundColor = "#394937";
        document.getElementById("divClr4").style.backgroundColor = "#394937";
        document.getElementById("divClr5").style.backgroundColor ="#394937";

    }else if(couleur2=='Ral 6021 - Vert pâle'){
        document.getElementById("divClr").style.backgroundColor = "#87a180";
        document.getElementById("divClr1").style.backgroundColor = "#87a180";
        document.getElementById("divClr2").style.backgroundColor = "#87a180";
        document.getElementById("divClr3").style.backgroundColor = "#87a180";
        document.getElementById("divClr4").style.backgroundColor = "#87a180";
        document.getElementById("divClr5").style.backgroundColor ="#87a180";

    }else if(couleur2=='Ral 6022 - Olive brun'){
        document.getElementById("divClr").style.backgroundColor = "#3c372a";
        document.getElementById("divClr1").style.backgroundColor = "#3c372a";
        document.getElementById("divClr2").style.backgroundColor = "#3c372a";
        document.getElementById("divClr3").style.backgroundColor = "#3c372a";
        document.getElementById("divClr4").style.backgroundColor = "#3c372a";
        document.getElementById("divClr5").style.backgroundColor ="#3c372a";

    }else if(couleur2=='Ral 6024 - Vert trafic'){
        document.getElementById("divClr").style.backgroundColor = "#008455";
        document.getElementById("divClr1").style.backgroundColor = "#008455";
        document.getElementById("divClr2").style.backgroundColor = "#008455";
        document.getElementById("divClr3").style.backgroundColor = "#008455";
        document.getElementById("divClr4").style.backgroundColor = "#008455";
        document.getElementById("divClr5").style.backgroundColor ="#008455";

    }else if(couleur2=='Ral 6025 - Vert fougère'){
        document.getElementById("divClr").style.backgroundColor = "#56723d";
        document.getElementById("divClr1").style.backgroundColor = "#56723d";
        document.getElementById("divClr2").style.backgroundColor = "#56723d";
        document.getElementById("divClr3").style.backgroundColor = "#56723d";
        document.getElementById("divClr4").style.backgroundColor = "#56723d";
        document.getElementById("divClr5").style.backgroundColor ="#56723d";

    }else if(couleur2=='Ral 6026 - Vert opale'){
        document.getElementById("divClr").style.backgroundColor = "#005c54";
        document.getElementById("divClr1").style.backgroundColor = "#005c54";
        document.getElementById("divClr2").style.backgroundColor = "#005c54";
        document.getElementById("divClr3").style.backgroundColor = "#005c54";
        document.getElementById("divClr4").style.backgroundColor = "#005c54";
        document.getElementById("divClr5").style.backgroundColor ="#005c54";

    }else if(couleur2=='Ral 6027 - Vert clair'){
        document.getElementById("divClr").style.backgroundColor = "#77bbbd";
        document.getElementById("divClr1").style.backgroundColor = "#77bbbd";
        document.getElementById("divClr2").style.backgroundColor = "#77bbbd";
        document.getElementById("divClr3").style.backgroundColor = "#77bbbd";
        document.getElementById("divClr4").style.backgroundColor = "#77bbbd";
        document.getElementById("divClr5").style.backgroundColor ="#77bbbd";

    }else if(couleur2=='Ral 6028 - Vert pin'){
        document.getElementById("divClr").style.backgroundColor = "#2e554b";
        document.getElementById("divClr1").style.backgroundColor = "#2e554b";
        document.getElementById("divClr2").style.backgroundColor = "#2e554b";
        document.getElementById("divClr3").style.backgroundColor = "#2e554b";
        document.getElementById("divClr4").style.backgroundColor = "#2e554b";
        document.getElementById("divClr5").style.backgroundColor ="#2e554b";

    }else if(couleur2=='Ral 6029 - Vert menthe'){
        document.getElementById("divClr").style.backgroundColor = "#006f43";
        document.getElementById("divClr1").style.backgroundColor = "#006f43";
        document.getElementById("divClr2").style.backgroundColor = "#006f43";
        document.getElementById("divClr3").style.backgroundColor = "#006f43";
        document.getElementById("divClr4").style.backgroundColor = "#006f43";
        document.getElementById("divClr5").style.backgroundColor ="#006f43";

    }else if(couleur2=='Ral 6032 - Vert de sécurité'){
        document.getElementById("divClr").style.backgroundColor = "#00855a";
        document.getElementById("divClr1").style.backgroundColor = "#00855a";
        document.getElementById("divClr2").style.backgroundColor = "#00855a";
        document.getElementById("divClr3").style.backgroundColor = "#00855a";
        document.getElementById("divClr4").style.backgroundColor = "#00855a";
        document.getElementById("divClr5").style.backgroundColor ="#00855a";

    }else if(couleur2=='Ral 6033 - Turquoise menthe'){
        document.getElementById("divClr").style.backgroundColor = "#3f8884";
        document.getElementById("divClr1").style.backgroundColor = "#3f8884";
        document.getElementById("divClr2").style.backgroundColor = "#3f8884";
        document.getElementById("divClr3").style.backgroundColor = "#3f8884";
        document.getElementById("divClr4").style.backgroundColor = "#3f8884";
        document.getElementById("divClr5").style.backgroundColor ="#3f8884";

    }else if(couleur2=='Ral 6034 - Turquoise pastel') {
        document.getElementById("divClr").style.backgroundColor = "#75adb1";
        document.getElementById("divClr1").style.backgroundColor = "#75adb1";
        document.getElementById("divClr2").style.backgroundColor = "#75adb1";
        document.getElementById("divClr3").style.backgroundColor = "#75adb1";
        document.getElementById("divClr4").style.backgroundColor = "#75adb1";
        document.getElementById("divClr5").style.backgroundColor = "#75adb1";
    }else if(couleur2=='Ral 7000 - Gris petit-gris') {
        document.getElementById("divClr").style.backgroundColor = "#798790";
        document.getElementById("divClr1").style.backgroundColor = "#798790";
        document.getElementById("divClr2").style.backgroundColor = "#798790";
        document.getElementById("divClr3").style.backgroundColor = "#798790";
        document.getElementById("divClr4").style.backgroundColor = "#798790";
        document.getElementById("divClr5").style.backgroundColor = "#798790";
    }else if(couleur2=='Ral 7001 - Gris argent') {
        document.getElementById("divClr").style.backgroundColor = "#8c969f";
        document.getElementById("divClr1").style.backgroundColor = "#8c969f";
        document.getElementById("divClr2").style.backgroundColor = "#8c969f";
        document.getElementById("divClr3").style.backgroundColor = "#8c969f";
        document.getElementById("divClr4").style.backgroundColor = "#8c969f";
        document.getElementById("divClr5").style.backgroundColor = "#8c969f";
    }else if(couleur2=='Ral 7002 - Gris olive') {
        document.getElementById("divClr").style.backgroundColor = "#827d67";
        document.getElementById("divClr1").style.backgroundColor = "#827d67";
        document.getElementById("divClr2").style.backgroundColor = "#827d67";
        document.getElementById("divClr3").style.backgroundColor = "#827d67";
        document.getElementById("divClr4").style.backgroundColor = "#827d67";
        document.getElementById("divClr5").style.backgroundColor = "#827d67";

    }else if(couleur2=='Ral 7004 - Gris de sécurité') {
        document.getElementById("divClr").style.backgroundColor = "#999a9f";
        document.getElementById("divClr1").style.backgroundColor = "#999a9f";
        document.getElementById("divClr2").style.backgroundColor = "#999a9f";
        document.getElementById("divClr3").style.backgroundColor = "#999a9f";
        document.getElementById("divClr4").style.backgroundColor = "#999a9f";
        document.getElementById("divClr5").style.backgroundColor = "#999a9f";

    }else if(couleur2=='Ral 7005 - Gris souris') {
        document.getElementById("divClr").style.backgroundColor = "#6d7270";
        document.getElementById("divClr1").style.backgroundColor = "#6d7270";
        document.getElementById("divClr2").style.backgroundColor = "#6d7270";
        document.getElementById("divClr3").style.backgroundColor = "#6d7270";
        document.getElementById("divClr4").style.backgroundColor = "#6d7270";
        document.getElementById("divClr5").style.backgroundColor = "#6d7270";
    }else if(couleur2=='Ral 7006 - Gris beige') {
        document.getElementById("divClr").style.backgroundColor = "#766a5d";
        document.getElementById("divClr1").style.backgroundColor = "#766a5d";
        document.getElementById("divClr2").style.backgroundColor = "#766a5d";
        document.getElementById("divClr3").style.backgroundColor = "#766a5d";
        document.getElementById("divClr4").style.backgroundColor = "#766a5d";
        document.getElementById("divClr5").style.backgroundColor = "#766a5d";
    }else if(couleur2=='Ral 7009 - Gris vert') {
        document.getElementById("divClr").style.backgroundColor = "#585e55";
        document.getElementById("divClr1").style.backgroundColor = "#585e55";
        document.getElementById("divClr2").style.backgroundColor = "#585e55";
        document.getElementById("divClr3").style.backgroundColor = "#585e55";
        document.getElementById("divClr4").style.backgroundColor = "#585e55";
        document.getElementById("divClr5").style.backgroundColor = "#585e55";
    }else if(couleur2=='Ral 7010 - Gris tente') {
        document.getElementById("divClr").style.backgroundColor = "#565957";
        document.getElementById("divClr1").style.backgroundColor = "#565957";
        document.getElementById("divClr2").style.backgroundColor = "#565957";
        document.getElementById("divClr3").style.backgroundColor = "#565957";
        document.getElementById("divClr4").style.backgroundColor = "#565957";
        document.getElementById("divClr5").style.backgroundColor = "#565957";
    }else if(couleur2=='Ral 7011 - Gris fer') {
        document.getElementById("divClr").style.backgroundColor = "#525a60";
        document.getElementById("divClr1").style.backgroundColor = "#525a60";
        document.getElementById("divClr2").style.backgroundColor = "#525a60";
        document.getElementById("divClr3").style.backgroundColor = "#525a60";
        document.getElementById("divClr4").style.backgroundColor = "#525a60";
        document.getElementById("divClr5").style.backgroundColor = "#525a60";
    }else if(couleur2=='Ral 7012 - Gris basalte') {
        document.getElementById("divClr").style.backgroundColor = "#575e62";
        document.getElementById("divClr1").style.backgroundColor = "#575e62";
        document.getElementById("divClr2").style.backgroundColor = "#575e62";
        document.getElementById("divClr3").style.backgroundColor = "#575e62";
        document.getElementById("divClr4").style.backgroundColor = "#575e62";
        document.getElementById("divClr5").style.backgroundColor = "#575e62";
    }else if(couleur2=='Ral 7013 - Gris brun') {
        document.getElementById("divClr").style.backgroundColor = "#585346";
        document.getElementById("divClr1").style.backgroundColor = "#585346";
        document.getElementById("divClr2").style.backgroundColor = "#585346";
        document.getElementById("divClr3").style.backgroundColor = "#585346";
        document.getElementById("divClr4").style.backgroundColor = "#585346";
        document.getElementById("divClr5").style.backgroundColor = "#585346";
    }else if(couleur2=='Ral 7015 - Gris ardoise') {
        document.getElementById("divClr").style.backgroundColor = "#4c5057";
        document.getElementById("divClr1").style.backgroundColor = "#4c5057";
        document.getElementById("divClr2").style.backgroundColor = "#4c5057";
        document.getElementById("divClr3").style.backgroundColor = "#4c5057";
        document.getElementById("divClr4").style.backgroundColor = "#4c5057";
        document.getElementById("divClr5").style.backgroundColor = "#4c5057";
    }else if(couleur2=='Ral 7021 - Gris noir') {
        document.getElementById("divClr").style.backgroundColor = "#2e3236";
        document.getElementById("divClr1").style.backgroundColor = "#2e3236";
        document.getElementById("divClr2").style.backgroundColor = "#2e3236";
        document.getElementById("divClr3").style.backgroundColor = "#2e3236";
        document.getElementById("divClr4").style.backgroundColor = "#2e3236";
        document.getElementById("divClr5").style.backgroundColor = "#2e3236";
    }else if(couleur2=='Ral 7022 - Gris terre dombre') {
        document.getElementById("divClr").style.backgroundColor = "#464644";
        document.getElementById("divClr1").style.backgroundColor = "#464644";
        document.getElementById("divClr2").style.backgroundColor = "#464644";
        document.getElementById("divClr3").style.backgroundColor = "#464644";
        document.getElementById("divClr4").style.backgroundColor = "#464644";
        document.getElementById("divClr5").style.backgroundColor = "#464644";
    }else if(couleur2=='Ral 7023 - Gris béton') {
        document.getElementById("divClr").style.backgroundColor = "#7f8279";
        document.getElementById("divClr1").style.backgroundColor = "#7f8279";
        document.getElementById("divClr2").style.backgroundColor = "#7f8279";
        document.getElementById("divClr3").style.backgroundColor = "#7f8279";
        document.getElementById("divClr4").style.backgroundColor = "#7f8279";
        document.getElementById("divClr5").style.backgroundColor = "#7f8279";
    }else if(couleur2=='Ral 7024 - Gris graphite') {
        document.getElementById("divClr").style.backgroundColor = "#484b52";
        document.getElementById("divClr1").style.backgroundColor = "#484b52";
        document.getElementById("divClr2").style.backgroundColor = "#484b52";
        document.getElementById("divClr3").style.backgroundColor = "#484b52";
        document.getElementById("divClr4").style.backgroundColor = "#484b52";
        document.getElementById("divClr5").style.backgroundColor = "#484b52";
    }else if(couleur2=='Ral 7026 - Gris granit') {
        document.getElementById("divClr").style.backgroundColor = "#354044";
        document.getElementById("divClr1").style.backgroundColor = "#354044";
        document.getElementById("divClr2").style.backgroundColor = "#354044";
        document.getElementById("divClr3").style.backgroundColor = "#354044";
        document.getElementById("divClr4").style.backgroundColor = "#354044";
        document.getElementById("divClr5").style.backgroundColor = "#354044";
    }else if(couleur2=='Ral 7030 - Gris pierre') {
        document.getElementById("divClr").style.backgroundColor = "#919089";
        document.getElementById("divClr1").style.backgroundColor = "#919089";
        document.getElementById("divClr2").style.backgroundColor = "#919089";
        document.getElementById("divClr3").style.backgroundColor = "#919089";
        document.getElementById("divClr4").style.backgroundColor = "#919089";
        document.getElementById("divClr5").style.backgroundColor = "#919089";
    }else if(couleur2=='Ral 7031 - Gris bleu') {
        document.getElementById("divClr").style.backgroundColor = "#5b686f";
        document.getElementById("divClr1").style.backgroundColor = "#5b686f";
        document.getElementById("divClr2").style.backgroundColor = "#5b686f";
        document.getElementById("divClr3").style.backgroundColor = "#5b686f";
        document.getElementById("divClr4").style.backgroundColor = "#5b686f";
        document.getElementById("divClr5").style.backgroundColor = "#5b686f";
    }else if(couleur2=='Ral 7032 - Gris silex') {
        document.getElementById("divClr").style.backgroundColor = "#b5b5a7";
        document.getElementById("divClr1").style.backgroundColor = "#b5b5a7";
        document.getElementById("divClr2").style.backgroundColor = "#b5b5a7";
        document.getElementById("divClr3").style.backgroundColor = "#b5b5a7";
        document.getElementById("divClr4").style.backgroundColor = "#b5b5a7";
        document.getElementById("divClr5").style.backgroundColor = "#b5b5a7";
    }else if(couleur2=='Ral 7033 - Gris ciment') {
        document.getElementById("divClr").style.backgroundColor = "#7a8376";
        document.getElementById("divClr1").style.backgroundColor = "#7a8376";
        document.getElementById("divClr2").style.backgroundColor = "#7a8376";
        document.getElementById("divClr3").style.backgroundColor = "#7a8376";
        document.getElementById("divClr4").style.backgroundColor = "#7a8376";
        document.getElementById("divClr5").style.backgroundColor = "#7a8376";
    }else if(couleur2=='Ral 7034 - Gris jaune') {
        document.getElementById("divClr").style.backgroundColor = "#928d75";
        document.getElementById("divClr1").style.backgroundColor = "#928d75";
        document.getElementById("divClr2").style.backgroundColor = "#928d75";
        document.getElementById("divClr3").style.backgroundColor = "#928d75";
        document.getElementById("divClr4").style.backgroundColor = "#928d75";
        document.getElementById("divClr5").style.backgroundColor = "#928d75";
    }else if(couleur2=='Ral 7036 - Gris platine') {
        document.getElementById("divClr").style.backgroundColor = "#949294";
        document.getElementById("divClr1").style.backgroundColor = "#949294";
        document.getElementById("divClr2").style.backgroundColor = "#949294";
        document.getElementById("divClr3").style.backgroundColor = "#949294";
        document.getElementById("divClr4").style.backgroundColor = "#949294";
        document.getElementById("divClr5").style.backgroundColor = "#949294";
    }else if(couleur2=='Ral 7038 - Gris agate') {
        document.getElementById("divClr").style.backgroundColor = "#b0b3af";
        document.getElementById("divClr1").style.backgroundColor = "#b0b3af";
        document.getElementById("divClr2").style.backgroundColor = "#b0b3af";
        document.getElementById("divClr3").style.backgroundColor = "#b0b3af";
        document.getElementById("divClr4").style.backgroundColor = "#b0b3af";
        document.getElementById("divClr5").style.backgroundColor = "#b0b3af";
    }else if(couleur2=='Ral 7039 - Gris quartz') {
        document.getElementById("divClr").style.backgroundColor = "#6d6b64";
        document.getElementById("divClr1").style.backgroundColor = "#6d6b64";
        document.getElementById("divClr2").style.backgroundColor = "#6d6b64";
        document.getElementById("divClr3").style.backgroundColor = "#6d6b64";
        document.getElementById("divClr4").style.backgroundColor = "#6d6b64";
        document.getElementById("divClr5").style.backgroundColor = "#6d6b64";
    }else if(couleur2=='Ral 7040 - Gris fenêtre') {
        document.getElementById("divClr").style.backgroundColor = "#9aa0a7";
        document.getElementById("divClr1").style.backgroundColor = "#9aa0a7";
        document.getElementById("divClr2").style.backgroundColor = "#9aa0a7";
        document.getElementById("divClr3").style.backgroundColor = "#9aa0a7";
        document.getElementById("divClr4").style.backgroundColor = "#9aa0a7";
        document.getElementById("divClr5").style.backgroundColor = "#9aa0a7";


    }else if(couleur2=='Ral 7042 - Gris trafic A') {
        document.getElementById("divClr").style.backgroundColor = "#929899";
        document.getElementById("divClr1").style.backgroundColor = "#929899";
        document.getElementById("divClr2").style.backgroundColor = "#929899";
        document.getElementById("divClr3").style.backgroundColor = "#929899";
        document.getElementById("divClr4").style.backgroundColor = "#929899";
        document.getElementById("divClr5").style.backgroundColor = "#929899";
    }else if(couleur2=='Ral 7043 - Gris trafic B') {
        document.getElementById("divClr").style.backgroundColor = "#505455";
        document.getElementById("divClr1").style.backgroundColor = "#505455";
        document.getElementById("divClr2").style.backgroundColor = "#505455";
        document.getElementById("divClr3").style.backgroundColor = "#505455";
        document.getElementById("divClr4").style.backgroundColor = "#505455";
        document.getElementById("divClr5").style.backgroundColor = "#505455";
    }else if(couleur2=='Ral 7044 - Gris soie') {
        document.getElementById("divClr").style.backgroundColor = "#bab9b0";
        document.getElementById("divClr1").style.backgroundColor = "#bab9b0";
        document.getElementById("divClr2").style.backgroundColor = "#bab9b0";
        document.getElementById("divClr3").style.backgroundColor = "#bab9b0";
        document.getElementById("divClr4").style.backgroundColor = "#bab9b0";
        document.getElementById("divClr5").style.backgroundColor = "#bab9b0";
    }else if(couleur2=='Ral 7045 - Télé gris 1') {
        document.getElementById("divClr").style.backgroundColor = "#909090";
        document.getElementById("divClr1").style.backgroundColor = "#909090";
        document.getElementById("divClr2").style.backgroundColor = "#909090";
        document.getElementById("divClr3").style.backgroundColor = "#909090";
        document.getElementById("divClr4").style.backgroundColor = "#909090";
        document.getElementById("divClr5").style.backgroundColor = "#909090";
    }else if(couleur2=='Ral 7046 - Télé gris 2') {
        document.getElementById("divClr").style.backgroundColor = "#82898f";
        document.getElementById("divClr1").style.backgroundColor = "#82898f";
        document.getElementById("divClr2").style.backgroundColor = "#82898f";
        document.getElementById("divClr3").style.backgroundColor = "#82898f";
        document.getElementById("divClr4").style.backgroundColor = "#82898f";
        document.getElementById("divClr5").style.backgroundColor = "#82898f";
    }else if(couleur2=='Ral 7047 - Télé gris 4') {
        document.getElementById("divClr").style.backgroundColor = "#d0d0d0";
        document.getElementById("divClr1").style.backgroundColor = "#d0d0d0";
        document.getElementById("divClr2").style.backgroundColor = "#d0d0d0";
        document.getElementById("divClr3").style.backgroundColor = "#d0d0d0";
        document.getElementById("divClr4").style.backgroundColor = "#d0d0d0";
        document.getElementById("divClr5").style.backgroundColor = "#d0d0d0";
    }else if(couleur2=='Ral 7048 - Gris souris nacré') {
        document.getElementById("divClr").style.backgroundColor = "#898176";
        document.getElementById("divClr1").style.backgroundColor = "#898176";
        document.getElementById("divClr2").style.backgroundColor = "#898176";
        document.getElementById("divClr3").style.backgroundColor = "#898176";
        document.getElementById("divClr4").style.backgroundColor = "#898176";
        document.getElementById("divClr5").style.backgroundColor = "#898176";
    }else if(couleur2=='Ral 8000 - Brun vert') {
        document.getElementById("divClr").style.backgroundColor = "#8b7045";
        document.getElementById("divClr1").style.backgroundColor = "#8b7045";
        document.getElementById("divClr2").style.backgroundColor = "#8b7045";
        document.getElementById("divClr3").style.backgroundColor = "#8b7045";
        document.getElementById("divClr4").style.backgroundColor = "#8b7045";
        document.getElementById("divClr5").style.backgroundColor = "#8b7045";
    }else if(couleur2=='Ral 8001 - Terre de Sienne') {
        document.getElementById("divClr").style.backgroundColor = "#9c6935";
        document.getElementById("divClr1").style.backgroundColor = "#9c6935";
        document.getElementById("divClr2").style.backgroundColor = "#9c6935";
        document.getElementById("divClr3").style.backgroundColor = "#9c6935";
        document.getElementById("divClr4").style.backgroundColor = "#9c6935";
        document.getElementById("divClr5").style.backgroundColor = "#9c6935";
    }else if(couleur2=='Ral 8002 - Brun de sécurité') {
        document.getElementById("divClr").style.backgroundColor = "#774c3b";
        document.getElementById("divClr1").style.backgroundColor = "#774c3b";
        document.getElementById("divClr2").style.backgroundColor = "#774c3b";
        document.getElementById("divClr3").style.backgroundColor = "#774c3b";
        document.getElementById("divClr4").style.backgroundColor = "#774c3b";
        document.getElementById("divClr5").style.backgroundColor = "#774c3b";
    }else if(couleur2=='Ral 8003 - Brun argile') {
        document.getElementById("divClr").style.backgroundColor = "#815333";
        document.getElementById("divClr1").style.backgroundColor = "#815333";
        document.getElementById("divClr2").style.backgroundColor = "#815333";
        document.getElementById("divClr3").style.backgroundColor = "#815333";
        document.getElementById("divClr4").style.backgroundColor = "#815333";
        document.getElementById("divClr5").style.backgroundColor = "#815333";
    }else if(couleur2=='Ral 8003 - Brun argile') {
        document.getElementById("divClr").style.backgroundColor = "#904e3b";
        document.getElementById("divClr1").style.backgroundColor = "#904e3b";
        document.getElementById("divClr2").style.backgroundColor = "#904e3b";
        document.getElementById("divClr3").style.backgroundColor = "#904e3b";
        document.getElementById("divClr4").style.backgroundColor = "#904e3b";
        document.getElementById("divClr5").style.backgroundColor = "#904e3b";
    }else if(couleur2=='Ral 8007 - Brun fauve') {
        document.getElementById("divClr").style.backgroundColor = "#6b442a";
        document.getElementById("divClr1").style.backgroundColor = "#6b442a";
        document.getElementById("divClr2").style.backgroundColor = "#6b442a";
        document.getElementById("divClr3").style.backgroundColor = "#6b442a";
        document.getElementById("divClr4").style.backgroundColor = "#6b442a";
        document.getElementById("divClr5").style.backgroundColor = "#6b442a";
    }else if(couleur2=='Ral 8008 - Brun olive') {
        document.getElementById("divClr").style.backgroundColor = "#735230";
        document.getElementById("divClr1").style.backgroundColor = "#735230";
        document.getElementById("divClr2").style.backgroundColor = "#735230";
        document.getElementById("divClr3").style.backgroundColor = "#735230";
        document.getElementById("divClr4").style.backgroundColor = "#735230";
        document.getElementById("divClr5").style.backgroundColor = "#735230";
    }else if(couleur2=='Ral 8011 - Brun noisette') {
        document.getElementById("divClr").style.backgroundColor = "#5b3927";
        document.getElementById("divClr1").style.backgroundColor = "#5b3927";
        document.getElementById("divClr2").style.backgroundColor = "#5b3927";
        document.getElementById("divClr3").style.backgroundColor = "#5b3927";
        document.getElementById("divClr4").style.backgroundColor = "#5b3927";
        document.getElementById("divClr5").style.backgroundColor = "#5b3927";
    }else if(couleur2=='Ral 8012 - Brun rouge') {
        document.getElementById("divClr").style.backgroundColor = "#64312a";
        document.getElementById("divClr1").style.backgroundColor = "#64312a";
        document.getElementById("divClr2").style.backgroundColor = "#64312a";
        document.getElementById("divClr3").style.backgroundColor = "#64312a";
        document.getElementById("divClr4").style.backgroundColor = "#64312a";
        document.getElementById("divClr5").style.backgroundColor = "#64312a";
    }else if(couleur2=='Ral 8014 - Brun sépia') {
        document.getElementById("divClr").style.backgroundColor = "#49372a";
        document.getElementById("divClr1").style.backgroundColor = "#49372a";
        document.getElementById("divClr2").style.backgroundColor = "#49372a";
        document.getElementById("divClr3").style.backgroundColor = "#49372a";
        document.getElementById("divClr4").style.backgroundColor = "#49372a";
        document.getElementById("divClr5").style.backgroundColor = "#49372a";
    }else if(couleur2=='Ral 8016 - Brun acajou') {
        document.getElementById("divClr").style.backgroundColor = "#4f3128";
        document.getElementById("divClr1").style.backgroundColor = "#4f3128";
        document.getElementById("divClr2").style.backgroundColor = "#4f3128";
        document.getElementById("divClr3").style.backgroundColor = "#4f3128";
        document.getElementById("divClr4").style.backgroundColor = "#4f3128";
        document.getElementById("divClr5").style.backgroundColor = "#4f3128";
    }else if(couleur2=='Ral 8017 - Brun chocolat') {
        document.getElementById("divClr").style.backgroundColor = "#45302b";
        document.getElementById("divClr1").style.backgroundColor = "#45302b";
        document.getElementById("divClr2").style.backgroundColor = "#45302b";
        document.getElementById("divClr3").style.backgroundColor = "#45302b";
        document.getElementById("divClr4").style.backgroundColor = "#45302b";
        document.getElementById("divClr5").style.backgroundColor = "#45302b";
    }
    else if(couleur2=='Ral 8019 - Brun gris') {
        document.getElementById("divClr").style.backgroundColor = "#3b3332";
        document.getElementById("divClr1").style.backgroundColor = "#3b3332";
        document.getElementById("divClr2").style.backgroundColor = "#3b3332";
        document.getElementById("divClr3").style.backgroundColor = "#3b3332";
        document.getElementById("divClr4").style.backgroundColor = "#3b3332";
        document.getElementById("divClr5").style.backgroundColor = "#3b3332";
    }else if(couleur2=='Ral 8022 - Brun noir') {
        document.getElementById("divClr").style.backgroundColor = "#1e1a1a";
        document.getElementById("divClr1").style.backgroundColor = "#1e1a1a";
        document.getElementById("divClr2").style.backgroundColor = "#1e1a1a";
        document.getElementById("divClr3").style.backgroundColor = "#1e1a1a";
        document.getElementById("divClr4").style.backgroundColor = "#1e1a1a";
        document.getElementById("divClr5").style.backgroundColor = "#1e1a1a";
    }else if(couleur2=='Ral 8023 - Brun orangé') {
        document.getElementById("divClr").style.backgroundColor = "#a45c32";
        document.getElementById("divClr1").style.backgroundColor = "#a45c32";
        document.getElementById("divClr2").style.backgroundColor = "#a45c32";
        document.getElementById("divClr3").style.backgroundColor = "#a45c32";
        document.getElementById("divClr4").style.backgroundColor = "#a45c32";
        document.getElementById("divClr5").style.backgroundColor = "#a45c32";
    }else if(couleur2=='Ral 8024 - Brun beige') {
        document.getElementById("divClr").style.backgroundColor = "#7b5741";
        document.getElementById("divClr1").style.backgroundColor = "#7b5741";
        document.getElementById("divClr2").style.backgroundColor = "#7b5741";
        document.getElementById("divClr3").style.backgroundColor = "#7b5741";
        document.getElementById("divClr4").style.backgroundColor = "#7b5741";
        document.getElementById("divClr5").style.backgroundColor = "#7b5741";
    }else if(couleur2=='Ral 8024 - Brun beige') {
        document.getElementById("divClr").style.backgroundColor = "#7b5741";
        document.getElementById("divClr1").style.backgroundColor = "#7b5741";
        document.getElementById("divClr2").style.backgroundColor = "#7b5741";
        document.getElementById("divClr3").style.backgroundColor = "#7b5741";
        document.getElementById("divClr4").style.backgroundColor = "#7b5741";
        document.getElementById("divClr5").style.backgroundColor = "#7b5741";
    }else if(couleur2=='Ral 8025 - Brun pâle') {
        document.getElementById("divClr").style.backgroundColor = "#765d4d";
        document.getElementById("divClr1").style.backgroundColor = "#765d4d";
        document.getElementById("divClr2").style.backgroundColor = "#765d4d";
        document.getElementById("divClr3").style.backgroundColor = "#765d4d";
        document.getElementById("divClr4").style.backgroundColor = "#765d4d";
        document.getElementById("divClr5").style.backgroundColor = "#765d4d";
    }else if(couleur2=='Ral 8028 - Brun terre') {
        document.getElementById("divClr").style.backgroundColor = "#4f3b2b";
        document.getElementById("divClr1").style.backgroundColor = "#4f3b2b";
        document.getElementById("divClr2").style.backgroundColor = "#4f3b2b";
        document.getElementById("divClr3").style.backgroundColor = "#4f3b2b";
        document.getElementById("divClr4").style.backgroundColor = "#4f3b2b";
        document.getElementById("divClr5").style.backgroundColor = "#4f3b2b";
    }else if(couleur2=='Ral 9001 - Blanc crème') {
        document.getElementById("divClr").style.backgroundColor = "#eee9da";
        document.getElementById("divClr1").style.backgroundColor = "#eee9da";
        document.getElementById("divClr2").style.backgroundColor = "#eee9da";
        document.getElementById("divClr3").style.backgroundColor = "#eee9da";
        document.getElementById("divClr4").style.backgroundColor = "#eee9da";
        document.getElementById("divClr5").style.backgroundColor = "#eee9da";
    }else if(couleur2=='Ral 9002 - Blanc gris') {
        document.getElementById("divClr").style.backgroundColor = "#dadbd5";
        document.getElementById("divClr1").style.backgroundColor = "#dadbd5";
        document.getElementById("divClr2").style.backgroundColor = "#dadbd5";
        document.getElementById("divClr3").style.backgroundColor = "#dadbd5";
        document.getElementById("divClr4").style.backgroundColor = "#dadbd5";
        document.getElementById("divClr5").style.backgroundColor = "#dadbd5";
    }else if(couleur2=='Ral 9002 - Blanc gris') {
        document.getElementById("divClr").style.backgroundColor = "#f8f9fb";
        document.getElementById("divClr1").style.backgroundColor = "#f8f9fb";
        document.getElementById("divClr2").style.backgroundColor = "#f8f9fb";
        document.getElementById("divClr3").style.backgroundColor = "#f8f9fb";
        document.getElementById("divClr4").style.backgroundColor = "#f8f9fb";
        document.getElementById("divClr5").style.backgroundColor = "#f8f9fb";
    }else if(couleur2=='Ral 9004 - Noir de sécurité') {
        document.getElementById("divClr").style.backgroundColor = "#252427";
        document.getElementById("divClr1").style.backgroundColor = "#252427";
        document.getElementById("divClr2").style.backgroundColor = "#252427";
        document.getElementById("divClr3").style.backgroundColor = "#252427";
        document.getElementById("divClr4").style.backgroundColor = "#252427";
        document.getElementById("divClr5").style.backgroundColor = "#252427";
    }else if(couleur2=='Ral 9005 - Noir foncé') {
        document.getElementById("divClr").style.backgroundColor = "#151619";
        document.getElementById("divClr1").style.backgroundColor = "#151619";
        document.getElementById("divClr2").style.backgroundColor = "#151619";
        document.getElementById("divClr3").style.backgroundColor = "#151619";
        document.getElementById("divClr4").style.backgroundColor = "#151619";
        document.getElementById("divClr5").style.backgroundColor = "#151619";
    }else if(couleur2=='Ral 9005 - Noir foncé') {
        document.getElementById("divClr").style.backgroundColor = "#f4f4ed";
        document.getElementById("divClr1").style.backgroundColor = "#f4f4ed";
        document.getElementById("divClr2").style.backgroundColor = "#f4f4ed";
        document.getElementById("divClr3").style.backgroundColor = "#f4f4ed";
        document.getElementById("divClr4").style.backgroundColor = "#f4f4ed";
        document.getElementById("divClr5").style.backgroundColor = "#f4f4ed";
    }else if(couleur2=='Ral 9005 - Noir foncé') {
        document.getElementById("divClr").style.backgroundColor = "#1f2126";
        document.getElementById("divClr1").style.backgroundColor = "#1f2126";
        document.getElementById("divClr2").style.backgroundColor = "#1f2126";
        document.getElementById("divClr3").style.backgroundColor = "#1f2126";
        document.getElementById("divClr4").style.backgroundColor = "#1f2126";
        document.getElementById("divClr5").style.backgroundColor = "#1f2126";
    }else if(couleur2=='Ral 9016 - Blanc trafic') {
        document.getElementById("divClr").style.backgroundColor = "#f3f6f6";
        document.getElementById("divClr1").style.backgroundColor = "#f3f6f6";
        document.getElementById("divClr2").style.backgroundColor = "#f3f6f6";
        document.getElementById("divClr3").style.backgroundColor = "#f3f6f6";
        document.getElementById("divClr4").style.backgroundColor = "#f3f6f6";
        document.getElementById("divClr5").style.backgroundColor = "#f3f6f6";
    }else if(couleur2=='Ral 9017 - Noir trafic') {
        document.getElementById("divClr").style.backgroundColor = "#1b191d";
        document.getElementById("divClr1").style.backgroundColor = "#1b191d";
        document.getElementById("divClr2").style.backgroundColor = "#1b191d";
        document.getElementById("divClr3").style.backgroundColor = "#1b191d";
        document.getElementById("divClr4").style.backgroundColor = "#1b191d";
        document.getElementById("divClr5").style.backgroundColor = "#1b191d";
    }else if(couleur2=='Ral 9018 - Blanc papyrus') {
            document.getElementById("divClr").style.backgroundColor = "#cbd2d0";
            document.getElementById("divClr1").style.backgroundColor = "#cbd2d0";
            document.getElementById("divClr2").style.backgroundColor = "#cbd2d0";
            document.getElementById("divClr3").style.backgroundColor = "#cbd2d0";
            document.getElementById("divClr4").style.backgroundColor = "#cbd2d0";
            document.getElementById("divClr5").style.backgroundColor = "#cbd2d0";
        }

});
function Vhauteur(){
    var largeur=document.getElementById("largeurId").value;
    var hauteur=document.getElementById("hauteurId").value;
    var linteau = document.getElementById("linteauId").value;
    var ecg=document.getElementById("egcId").value;
    var ecd=document.getElementById('ecdId').value;
    var refoulement=document.getElementById('refoulement').value;
    if((largeur =='') && (hauteur=='') &&(linteau!='') || (ecg !='')|| (ecd!='') || (refoulement!='')){
        document.getElementById('warn1').innerHTML = "Largeur requis!";
        document.getElementById('warn2').innerHTML = "Hauteur requis!";
    }
}
function Vlargeur(){
    var largeur= document.getElementById('largeurId').value;
    var hauteur=document.getElementById('hauteurId').value;
    console.log(largeur);
    console.log(hauteur);
    if((hauteur !='') && (largeur =='')){
        document.getElementById('warn').innerHTML = "largeur requis!";
    }
}
function quantiteHublot(){
    var qte=document.getElementById('hQte').value;
    if(qte>4){
        document.getElementById('qth').innerHTML = "veuillez saisir un nombre ente 1 et 4 ";
    }
}
function quantiteHublot1(){
    var qte=document.getElementById('hQte1').value;
    if(qte>4){
        document.getElementById('qth1').innerHTML = "veuillez saisir un nombre ente 1 et 4 ";
    }
}
function quantiteHublot2(){
    var qte=document.getElementById('hQte2').value;
    if(qte>4){
        document.getElementById('qth2').innerHTML = "veuillez saisir un nombre ente 1 et 4 ";
    }
}
function prixFinition() {

    var finition = $("input[name='finition']:checked").val();
    if(  $("#finition1").is(":checked")) {

        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total après ajout prix finition :  " + total);
        total += 72;
        document.getElementById("tab").innerHTML = (total.toFixed(2))+ " €";
    }else{
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total sans prix finition :  " + total);
        total -= 72;
        document.getElementById("tab").innerHTML = (total.toFixed(2))+ " €";}

}
function prixFinition2() {

    var finition = $("input[name='finition']:checked").val();
    if(  $("#finition2").is(":checked")) {

        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total après ajout prix finition :  " + total);
        total += 79.2;
        document.getElementById("tab").innerHTML = (total.toFixed(2))+ " €";
    }else{
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total sans prix finition :  " + total);
        total -= 79.2;
        document.getElementById("tab").innerHTML = (total.toFixed(2))+ " €";}

}
function quantite(){

    var quantite = document.getElementById('qteId').value;
    var largeur= document.getElementById('largeurId').value;
    var hauteur=document.getElementById('hauteurId').value;
    console.log(quantite);
    console.log(largeur);
    if((largeur!='') || (hauteur!='') && (quantite =='')){

        document.getElementById("warning").innerHTML = "quantite requise!";
        $(window).scrollTop(0);
    }
}
function refoulement(){

    var refoulement = document.getElementById('refoulement').value;
    console.log('refoulement' + refoulement);
    var hauteur= document.getElementById('hauteurId').value;
    console.log("hauteur"+ hauteur);
    if(refoulement < hauteur ){
        document.getElementById("ref").innerHTML = " refoulement doit etre supérieur à votre hauteur!";
    }else{
        document.getElementById("ref").innerHTML="";
    }

}
function couleurral() {
    var selectElmt = document.getElementById('coul').value;
    document.getElementById('ral').innerText = selectElmt;

}
function tab() {
    updatePrice(tabStandard);
}

function tab() {
    updatePrice(tabStandard);
}

function tabRal() {
    if (document.getElementById('coul').value != '') {
        updatePrice(vartabCouleur);
    }else{
        updatePrice(tabStandard);
    }
}

function updatePrice(tabCouleur) {
    var q = document.getElementById('qteId').value;
    var i = (document.getElementById("largeurId").value - 1900) / 100;
    console.log("Largeur : " + i);
    var j = (document.getElementById("hauteurId").value - 1900) / 100;
    console.log("Hauteur : " + j);
    console.table(tabCouleur[i][j]);
    var result = tabCouleur[i][j] * q;
    document.getElementById("tab").innerHTML = result + " €";
    return result;

}

function prixinitiale() {
    if (document.getElementById('coul').value != '') {
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total : " + total);

        document.getElementById("tab").innerHTML =  1469.36 + " €";
    }else{
        document.getElementById("tab").innerHTML =  1350.83  + " €";
    }
}
function Afficheaccportillon(){

    if (document.getElementById('port1').value = "true" && $("#port1").is(":checked")) {

        document.getElementById("accessPortillon").style.display="block";

    }else {
        document.getElementById("accessPortillon").style.display="none";
    }
}
function prixportillon() {

    if (document.getElementById('port1').value = "true" && $("#port1").is(":checked")) {
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        total += 660;
        console.log("Total après ajout prix portillon : " + total);

        document.getElementById("tab").innerHTML = (total.toFixed(2))+ " €";

    }
}

function prixsansPortiollon(){

    if($("#port1").is(":checked") ) {
        $("#port1").prop("checked", false);
    }
    else
    if (document.getElementById('port1').value = "Non") {
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        total -= 660;

        console.log("Total SANS ajout prix portillon :  " + total);
        document.getElementById("tab").innerHTML = (total.toFixed(2)) + " €";

    }

}


function prixMoteur(){
    if((document.getElementById('mot1').value = "Oui")){
        var price = parseFloat(document.getElementById('tab').innerHTML);
        console.log(price);
        price += 252;
        console.log("Total après ajout prix moteur : " + price);

        document.getElementById("tab").innerHTML = (price.toFixed(2));
    }else{
        var price = parseFloat(document.getElementById('tab').innerHTML);
        console.log(price);
        price -= 252;
        console.log("Total après sans prix moteur : " + price);
        document.getElementById("tab").innerHTML = (price.toFixed(2));

    }
}
function prixsansMoteur(){
    if((document.getElementById('mot2').value = "Non")){
        var price = parseFloat(document.getElementById('tab').innerHTML);
        console.log(price);
        price -= 252;
        console.log("Total après ajout prix moteur : " + price);

        document.getElementById("tab").innerHTML = (price.toFixed(2));
    }
}
function prixsecuriteportillon(){

    if((document.getElementById("Sp1").value="Oui")) {
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total après ajout prix sécurité portillon  :  " + total);
        total += 114;
        document.getElementById("tab").innerHTML = (total.toFixed(2)) + " €";
    }

}
function prixsansecuriteportillon(){

    if((document.getElementById("Sp2").value="Non")){
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total après ajout prix sécurité portillon  :  " + total);
        total -= 114;
        document.getElementById("tab").innerHTML = (total.toFixed(2)) + " €";

    }
}
/*---------------------------------------------------------------------------------------------Prix hublot----------------------------------------------------------------------------------------------------------------------------------------------------------*/




var total = 0;
var valPrec = 0;
function prixHublotRectangle() {

    if (($("#hublot1").is(":checked"))) {

        $("#hublot2").prop("checked", false);
        $("#hublot3").prop("checked", false);


        //variable du prix d'une entrée
        var prixE = parseFloat(document.getElementById("tab").innerHTML);
        //variable de la quantité sélectionnée
        var val = document.getElementById('hQte').value;

        if (val != "") {
            valPrec = val;


            total = prixE + (72 * valPrec);
            document.getElementById("tab").innerHTML = total.toFixed(2);
            console.log(total);
            console.log(val);
        } else

            total = prixE - (72 * valPrec);
        document.getElementById("tab").innerHTML = total.toFixed(2);
        console.log(total);
        console.log(val);
    }
}

var total1 = 0;
var valPrec1= 0;
function prixHublotOvale() {

    if (($("#hublot2").is(":checked"))) {

        $("#hublot1").prop("checked", false);
        $("#hublot3").prop("checked", false);

        //variable du prix d'une entrée
        var prixE1 = parseFloat(document.getElementById("tab").innerHTML);
        //variable de la quantité sélectionnée
        var val1 = document.getElementById('hQte1').value;

        if (val1 != "") {
            valPrec1 = val1;


            total1 = prixE1 + (92 * valPrec1);
            document.getElementById("tab").innerHTML = total.toFixed(2);
            console.log(total1);
            console.log(val1);
        } else

            total1 = prixE1 - (92 * valPrec1);
        document.getElementById("tab").innerHTML = total1.toFixed(2);
        console.log(total1);
        console.log(val1);
    }
}

var total2 = 0;
var valPrec2= 0;

function prixventillation() {

    if (($("#hublot3").is(":checked"))) {

        $("#hublot1").prop("checked", false);
        $("#hublot2").prop("checked", false);

        //variable du prix d'une entrée
        var prixE2 = parseFloat(document.getElementById("tab").innerHTML);
        //variable de la quantité sélectionnée
        var val2 = document.getElementById('hQte2').value;

        if (val2 != "") {

            valPrec2 = val2;

            total2 = prixE2 + (54 * valPrec2);
            document.getElementById("tab").innerHTML = total2.toFixed(2);
            console.log(total2);
            console.log(val2);
        } else

            total2 = prixE2 - (54 * valPrec2);
        document.getElementById("tab").innerHTML = total2.toFixed(2);
        console.log(total2);
        console.log(val2);
    }
}


function prixdeverouillage(){

    if(($("#deverouId").is(":checked")) && ($("#hublot3").is("!:checked")) && ($("#hublot2").is("!:checked")) ) {
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total après ajout prix verouillage :  " + total);
        total += 24;
        document.getElementById("tab").innerHTML = (total.toFixed(2)) + " €";
    }else{
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total sans prix verouillage :  " + total);
        total -= 24;
        document.getElementById("tab").innerHTML = (total.toFixed(2)) + " €";

    }

}
function prixtelecommande() {

    if (($("#telecommandeId").is(":checked"))) {
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total après ajout prix télécommande :  " + total);
        total += 36;
        document.getElementById("tab").innerHTML = (total.toFixed(2)) + " €";

    }else{
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total sans prix telecommande  :  " + total);
        total -= 36;
        document.getElementById("tab").innerHTML = (total.toFixed(2)) + " €";
    }
}

function prixinterept(){
    if(($("#interrepId").is(":checked")) ){
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total après ajout prix interpteur   :  " + total);
        total += 12;
        document.getElementById("tab").innerHTML = (total.toFixed(2))+ " €";


    }else{
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total après ajout prix interpteur   :  " + total);
        total -= 12;
        document.getElementById("tab").innerHTML = (total.toFixed(2))+ " €";
    }

}
function prixdigicode() {

    if (($("#digicodeId").is(":checked"))) {
        var totale = parseFloat(document.getElementById("tab").innerHTML);
        console.log(totale);
        console.log("totale apres ajout digicode: " + totale);
        totale += 194;
        document.getElementById("tab").innerHTML= (totale.toFixed(2)) + "€";
    } else {
        var totale = parseFloat(document.getElementById("tab").innerHTML);
        console.log(totale);
        console.log("totale apres ajout digicode: " + totale);
        totale -= 194;
        document.getElementById("tab").innerHTML=(totale.toFixed(2)) + "€";

    }
}

function prixgyrophare(){
    if(($("#girId").is(":checked")) ) {
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total après ajout gyrophare :  " + total);
        total += 26.40;
        document.getElementById("tab").innerHTML = (total.toFixed(2)) + " €";
    }else{

        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total sans  gyrophare  :  " + total);
        total -= 26.40;
        document.getElementById("tab").innerHTML = (total.toFixed(2)) + " €";
    }

}
function prixphotocellule(){
    if(($("#photocelluleId").is(":checked"))){
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total après ajout prix photocellule  :  " + total);
        total += 76.80;
        document.getElementById("tab").innerHTML = (total.toFixed(2))+ " €";


    }else{
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total sans photocellule  :  " + total);
        total -= 76.80;
        document.getElementById("tab").innerHTML = (total.toFixed(2))+ " €";
    }
}

function prixgroom() {

    var total = parseFloat(document.getElementById("tab").innerHTML);
    console.log(total);
    console.log("Total après ajout prix groom   :  " + total);
    total += 42;
    document.getElementById("tab").innerHTML = (total.toFixed(2)) + " €";
}

function prixsansgroom(){

    var total = parseFloat(document.getElementById("tab").innerHTML);
    console.log(total);
    console.log("Total SANS prix groom   :  " + total);
    total -= 42;
    document.getElementById("tab").innerHTML = (total.toFixed(2))+ " €";
}


/*  $('input:radio[name=modele]:checked').change(function () {


  var modele = $("input[name='modele']:checked").val();

      alert("ma modele est : " + modele );



  if (modele == 'à double rainures') {

      document.getElementById("couleur1").style.display = "block";
      document.getElementById("couleur2").style.display = "block";
      document.getElementById("couleur3").style.display = "block";
      document.getElementById("couleur4").style.display = "block";
      document.getElementById("couleur5").style.display = "block";
      document.getElementById("couleur6").style.display = "block";
      document.getElementById("couleur7").style.display = "block";
      document.getElementById("couleur8").style.display = "block";
      document.getElementById("divClr").style.display = "block";

      $("#imgModele").attr('src', 'img/DR.png');



  }



  if (modele == 'panneaux lisses')
  {
      document.getElementById("couleur4").style.display = "none";
      document.getElementById("couleur5").style.display = "none";
      document.getElementById("couleur6").style.display = "none";
      document.getElementById("couleur7").style.display = "none";
      document.getElementById("couleur8").style.display = "none";
      document.getElementById("couleur1").style.display = "block";
      document.getElementById("couleur2").style.display = "block";
      document.getElementById("couleur3").style.display = "block";
      document.getElementById("divClr").style.display = "block";

      $("#imgModele").attr('src', 'img/PL.png');


  }


  if (modele == 'à casette') {


      document.getElementById("couleur2").style.display = "none";
      document.getElementById("couleur3").style.display = "none";
      document.getElementById("couleur4").style.display = "none";
      document.getElementById("couleur5").style.display = "none";
      document.getElementById("couleur6").style.display = "none";
      document.getElementById("couleur7").style.display = "none";
      document.getElementById("couleur8").style.display = "none";
      document.getElementById("couleur1").style.display = "block";
      document.getElementById("divClr").style.display = "block";

      $("#imgModele").attr('src', 'img/CAS.png');


  }

  if (modele == 'à rainure') {


      document.getElementById("couleur2").style.display = "none";
      document.getElementById("couleur3").style.display = "none";
      document.getElementById("couleur4").style.display = "none";
      document.getElementById("couleur5").style.display = "none";
      document.getElementById("couleur6").style.display = "none";
      document.getElementById("couleur7").style.display = "none";
      document.getElementById("couleur8").style.display = "none";
      document.getElementById("couleur1").style.display = "block";
      document.getElementById("divClr").style.display = "block";

      $("#imgModele").attr('src', 'img/RAIN.png');

  }

});

 */

// J'ai mis en commentaire car ça ne pouvait pas fonctionner, la priorité au onChange qui est sur l'input directement
/*$('input:radio[name=modele]:checked').change(function () {


});*/


function hide() {
    var x = document.getElementById("configHtml");
    if ($("#qteId").val() != "" && $("#largeurId").val() != "" && !$("#hauteurId").val() != "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

$(document).ready(function () {

});


function returnRadio() {
    var valeur = '';

    for (i = 0; i < document.formulaire.modele.length; i++) {
        if (document.formulaire.modele[i].checked) {
            valeur = document.formulaire.modele[i].value;


            if (valeur == 'Rainures horizontales') {

                document.getElementById("couleur1").style.display = "block";
                document.getElementById("couleur2").style.display = "block";
                document.getElementById("couleur3").style.display = "block";
                document.getElementById("couleur4").style.display = "block";
                document.getElementById("couleur5").style.display = "block";
                document.getElementById("couleur6").style.display = "block";
                document.getElementById("couleur7").style.display = "block";
                document.getElementById("couleur8").style.display = "block";
                document.getElementById("divClr").style.display = "block";
                document.getElementById("divClr").style.backgroundColor = "#ffffFF";
                $("#imgModele").attr('src', 'img/DR.png');
            }


            if (valeur == 'Lisse') {
                document.getElementById("couleur4").style.display = "none";
                document.getElementById("couleur5").style.display = "none";
                document.getElementById("couleur6").style.display = "none";
                document.getElementById("couleur7").style.display = "none";
                document.getElementById("couleur8").style.display = "none";
                document.getElementById("couleur1").style.display = "block";
                document.getElementById("couleur2").style.display = "block";
                document.getElementById("couleur3").style.display = "block";
                document.getElementById("divClr").style.display = "block";
                document.getElementById("divClr").style.backgroundColor = "#ffffFF";
                $("#imgModele").attr('src', 'img/PL.png');

            }
            if (valeur == 'Cassette') {

                document.getElementById("couleur2").style.display = "none";
                document.getElementById("couleur3").style.display = "none";
                document.getElementById("couleur4").style.display = "none";
                document.getElementById("couleur5").style.display = "none";
                document.getElementById("couleur6").style.display = "none";
                document.getElementById("couleur7").style.display = "none";
                document.getElementById("couleur8").style.display = "none";
                document.getElementById("couleur1").style.display = "block";
                document.getElementById("divClr").style.display = "block";
                document.getElementById("divClr").style.backgroundColor = "#ffffFF";
                $("#imgModele").attr('src', 'img/CAS.png');


            }
            if (valeur == 'Monorainure') {
                document.getElementById("couleur2").style.display = "none";
                document.getElementById("couleur3").style.display = "none";
                document.getElementById("couleur4").style.display = "none";
                document.getElementById("couleur5").style.display = "none";
                document.getElementById("couleur6").style.display = "none";
                document.getElementById("couleur7").style.display = "none";
                document.getElementById("couleur8").style.display = "none";
                document.getElementById("couleur1").style.display = "block";
                document.getElementById("divClr").style.display = "block";
                document.getElementById("divClr").style.backgroundColor = "#ffffFF";
                $("#imgModele").attr('src', 'img/RAIN.png');
            }


        }
    }
}


/*
// je récupère le modèle dans une variable
var modele = $("input[name='modele']:checked").val();

if (modele == 'à double rainures') {
    // je change le css pour afficher la div
    $("#divClr").css('display', 'inline');

    // J'attribue l'image à l'attribut src
    $("#imgModele").attr('src', 'img/doublerainure.jpg');

    // Je change la couleur
    $("#divClr").css('background-color', 'white');
} else if ($("input[name='modele']:checked").val() == 'panneaux lisses') {
    document.getElementById("img2").style.display = "block";
    document.getElementById("img1").style.display = "none";
    document.getElementById("img3").style.display = "none";
    document.getElementById("img4").style.display = "none";

} else if ($("input[name='modele']:checked").val() == 'à casette') {
    document.getElementById("img3").style.display = "block";
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img4").style.display = "none";

} else if ($("input[name='modele']:checked").val() == 'à rainure') {
    document.getElementById("img4").style.display = "block";
    document.getElementById("img1").style.display = "none";
    document.getElementById("img3").style.display = "none";
    document.getElementById("img2").style.display = "none";

}




}

*/
function tirant(){
    var tirant =$("input[name='tirant']:checked").val()

    switch (tirant) {

        case'':
            document.getElementById('s1').style.display = 'block';
            document.getElementById('s2').style.diplay='none';
            break;

        case '1':
            document.getElementById('s2').style.display='none';
            document.getElementById('s1').style.display = 'block';

            break;

        case '2':

            document.getElementById('s1').style.display='none';
            document.getElementById('s2').style.display='block';

            break;
        case '1':
            document.getElementById('s2').style.display='none';
            document.getElementById('s1').style.display = 'block';

            break;
    }

}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


function hide() {
    var x = document.getElementById("configHtml");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function ral() {

    var x = document.getElementById("divral");

    $('input[name="couleur"]').prop('checked', false);

    if (x.style.display === "none" && !$('input[name="couleur"]').is(':checked')) {
        x.style.display = "block";
    } else {
        $('input[name="couleur"]').is(':checked').each(function () {
            $(this).checked = false;
        });
        x.style.display = "none";

        ($('#autreralId').val() == '');

    }
    if ($('input[name="couleur"]').is('checked')) {

        x.style.display = "none";
    }


}



function recup() {
    let json = JSON.stringify(utilisateur);

    document.getElementById("resultat").innerHTML =
        "Type de la variable : " + typeof (json) + "<br>Contenu de la variable : " + json;
}
$(document).ready(function(){

    if($('#qteId').val()==''|| $('#largeurId').val()=='' || $('#hauteurId').val()=='') {
        $(window).scrollTop(0);
        $(".warning").text("veuillez renseigner ce champs").show();
    }
    else{
        hide();
        $("#content").toggle();

    }


});

function resume(){

    var quantite=document.getElementById('qteId').value;

    var largeur=document.getElementById('largeurId').value;

    var hauteur=document.getElementById('hauteurId').value;

    var coinçonD=document.getElementById('ecdId').value;

    var coinçonG=document.getElementById('ecgId').value;

    var linteau=document.getElementById('linteauId').value;

    var refoulement=document.getElementById('refoulement').value;

    document.getElementById("quantite").innerHTML = "Vous avez choisi :"   +quantite +   "PDGS à RAINURES HORIZONTAL ";

    document.getElementById("largeur").innerHTML = "Votre largeur est de : " +largeur  ;

    document.getElementById("hauteur").innerHTML ="Votre Hauteur est de : "   +hauteur;
    document.getElementById("ecd").innerHTML ="Votre coinçon gauche est de : "  +coinçonD;
    document.getElementById("ecg").innerHTML ="votre coinçon droite est de :"  +coinçonG;
    document.getElementById("linteau").innerHTML ="Vous avez un linteau de :"  +linteau;
    document.getElementById("refoulement").innerHTML ="Votre refoulement est de :"  +refoulement;

}

/*


$(document).ready(function(){
    var maxField = 10; //Input fields increment limitation
    var addButton = $('.add_button'); //Add button selector
    var field = document.getElementById('configHtmlForm');
    var fieldHTML = field.innerHTML;
    var removeBtn = '<a href="javascript:void(0);" class="remove_button btn btn-danger ml-auto">Supprimer</a>';
    var x = 1; //Initial field counter is 1

    //Once add button is clicked
    $(addButton).click(function(){
        //Check maximum number of input fields
        if(x < maxField){
            x++; //Increment field counter

            $(field).append('<div>'+ fieldHTML + removeBtn +'</div>'); //Add field html
        }
    });

    //Once remove button is clicked
    $(field).on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });
});


$('body').scrollspy({ target: '#navbar-example' });
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
});

function get_current_option_text(fixation) {
    var select = document.getElementById(fixation);
    var options = select.getElementsByTagName('option');
    return options[select.selectedIndex].text;
}
function show_current_option_text(fixation, placeholder_id) {
    var text = get_current_option_text(fixation);
    var placeholder = document.getElementById(placeholder_id);
    placeholder.firstChild.nodeValue = text;
}

*/
