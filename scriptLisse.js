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


var tabStandard =
    [
            [1155.72,1180.8,1205.88,1230.96,1256.04,1281.12,1306.2,1331.28,1356.36,1381.44,1406.52,1431.6,1456.68,1481.76,1506.84,1531.92,1557,1582.08,1607.16,1632.24,1657.32,168.24,1707.48,1732.56,1757.64,1782.72,1807.8,1832.88,1857.96,1883.04,1908.12,1933.2]
            [1180.8,1207.2,1233.6,1260,1286.4,1312.8,1339.2,1365.6,1392,1418.4,1444.8,1471.2,1497.6,1524,1550.4,1576.8,1603.2,1629.6,1656,1682.4,1708.8,1735.2,1761.6,1788,1814.4,1840.8,1867.2,1893.6,1920,1946.4,1972.8,1999.2],
            [1205.88,1233.6,1261.32,1289.04,1316.76,1344.48,1372.2,1399.92,1427.64,1455.36,1483.08,1510.8,1538.52,1566.24,1593.96,1621.68,1649.4,1677.12,1704.84,1732.56,1760.28,1788,1815.72,1843.44,1871.16,1898.88,1926.6,1954.32,1982.04,2009.76,2037.48,2065.2],
            [1230.96,1260,1289.04,1318.08,1347.12,1376.16,1405.2,1434.24,1463.28,1492.32,1521.36,1550.4,1579.44,1608.48,1637.52,1666.56,1695.6,1724.64,1753.68,1782.72,1811.76,1840.8,1869.84,1898.88,1927.92,1956.96,1986,2015.04,2044.08,2073.12,2102.16,2131.2],
            [1256.04,1286.4,1316.76,1347.12,1377.48,1407.84,1438.2,1468.56,1498.92,1529.28,1559.64,1590,1620.36,1650.72,1681.08,1711.44,1741.8,1772.16,1802.52,1832.88,1863.24,1893.6,1923.96,1954.32,1984.68,2015.04,2045.4,2075.76,2106.12,2136.48,2166.84,2197.2],
            [1281.12,1312.8,1344.48,1376.16,1407.84,1439.52,1471.2,1502.88,1534.56,1566.24,1597.92,1629.6,1661.28,1692.96,1724.64,1756.32,1788,1819.68,1851.36,1883.04,1914.72,1946.4,1978.08,2009.76,2041.44,2073.12,2104.8,2136.48,2168.16,2199.84,2231.52,2263.2],
            [1306.2,1339.2,1372.2,1405.2,1438.2,1471.2,1504.2,1537.2,1570.2,1603.2,1636.2,1669.2,1702.2,1735.2,1768.2,1801.2,1834.2,1867.2,1900.2,1933.2,1966.2,1999.2,2032.2,2065.2,2098.2,2131.2,2164.2,2197.2,2230.2,2263.2,2296.2,2329.2],
            [1331.28,1365.6,1399.92,1434.24,1468.56,1502.88,1537.2,1571.52,1605.84,1640.16,1674.48,1708.8,1743.12,1777.44,1811.76,1846.08,1880.4,1914.72,1949.04,1983.36,2017.68,2052,2086.32,2120.64,2154.96,2189.28,2223.6,2257.92,2292.24,2326.56,2360.88,2395.2],
            [1356.36,1392,1427.64,1463.28,1498.92,1534.56,1570.2,1605.84,1641.48,1677.12,1712.76,1748.4,1784.04,1819.68,1855.32,1890.96,1926.6,1962.24,1997.88,2033.52,2069.16,2104.8,2140.44,2176.08,2211.72,2247.36,2283,2318.64,2354.28,2389.92,2425.56,2461.2],
            [1381.44,1418.4,1455.36,1492.32,1529.28,1566.24,1603.2,1640.16,1677.12,1714.08,1751.04,1788,1824.96,1861.92,1898.88,1935.84,1972.8,2009.76,2046.72,2083.68,2120.64,2157.6,2194.56,2231.52,2268.48,2305.44,2342.4,2379.36,2416.32,2453.28,2490.24,2527.2],
            [1406.52,1444.8,1483.08,1521.36,1559.64,1597.92,1636.2,1674.48,1712.76,1751.04,1789.32,1827.6,1865.88,1904.16,1942.44,1980.72,2019,2057.28,2095.56,2133.84,2172.12,2210.4,2248.68,2286.96,2325.24,2363.52,2401.8,2440.08,2478.36,2516.64,2554.92,2593.2],
            [1431.6,1471.2,1510.8,1550.4,1590,1629.6,1669.2,1708.8,1748.4,1788,1827.6,1867.2,1906.8,1946.4,1986,2025.6,2065.2,2104.8,2144.4,2184,2223.6,2263.2,2302.8,2342.4,2382,2421.6,2461.2,2500.8,2540.4,2580,2619.6,2659.2],
            [1456.68,1497.6,1538.52,1579.44,1620.36,1661.28,1702.2,1743.12,1784.04,1824.96,1865.88,1906.8,1947.72,1988.64,2029.56,2070.48,2111.4,2152.32,2193.24,2234.16,2275.08,2316,2356.92,2397.84,2438.76,2479.68,2520.6,2561.52,2602.44,2643.36,2684.28,2725.2],
            [1481.76,1524,1566.24,1608.48,1650.72,1692.96,1735.2,1777.44,1819.68,1861.92,1904.16,1946.4,1988.64,2030.88,2073.12,2115.36,2157.6,2199.84,2242.08,2284.32,2326.56,2368.8,2411.04,2453.28,2495.52,2537.76,2580,2622.24,2664.48,2706.72,2748.96,2791.2],
            [1506.84,1550.4,1593.96,1637.52,1681.08,1724.64,1768.2,1811.76,1855.32,1898.88,1942.44,1986,2029.56,2073.12,2116.68,2160.24,2203.8,2247.36,2290.92,2334.48,2378.04,2421.6,2465.16,2508.72,2552.28,2595.84,2639.4,2682.96,2726.52,2770.08,2813.64,2857.2],
            [1531.92,1576.8,1621.68,1666.56,1711.44,1756.32,1801.2,1846.08,1890.96,1935.84,1980.72,2025.6,2070.48,2115.36,2160.24,2205.12,2250,2294.88,2339.76,2384.64,2429.52,2474.4,2519.28,2564.16,2609.04,2653.92,2698.8,2743.68,2788.56,2833.44,2878.32,2923.2],
            [1557,1603.2,1649.4,1695.6,1741.8,1788,1834.2,1880.4,1926.6,1972.8,2019,2065.2,2111.4,2157.6,2203.8,2250,2296.2,2342.4,2388.6,2434.8,2481,2527.2,2573.4,2619.6,2665.8,2712,2758.2,2804.4,2850.6,2896.8,2943,2989.2],
            [1582.08,1629.6,1677.12,1724.64,1772.16,1819.68,1867.2,1914.72,1962.24,2009.76,2057.28,2104.8,2152.32,2199.84,2247.36,2294.88,2342.4,2389.92,2437.44,2484.96,2532.48,2580,2627.52,2675.04,2722.56,2770.08,2817.6,2865.12,2912.64,2960.16,3007.68,3055.2],
            [1607.16,1656,1704.84,1753.68,1802.52,1851.36,1900.2,1949.04,1997.88,2046.72,2095.56,2144.4,2193.24,2242.08,2290.92,2339.76,2388.6,2437.44,2486.28,2535.12,2583.96,2632.8,2681.64,2730.48,2779.32,2828.16,2877,2925.84,2974.68,3023.52,3072.36,3121.2],
            [1632.24,1682.4,1732.56,1782.72,1832.88,1883.04,1933.2,1983.36,2033.52,2083.68,2133.84,2184,2234.16,2284.32,2334.48,2384.64,2434.8,2484.96,2535.12,2585.28,2635.44,2685.6,2735.76,2785.92,2836.08,2886.24,2936.4,2986.56,3036.72,3086.88,3137.04,3187.2],
            [1657.32,1708.8,1760.28,1811.76,1863.24,1914.72,1966.2,2017.68,2069.16,2120.64,2172.12,2223.6,2275.08,2326.56,2378.04,2429.52,2481,2532.48,2583.96,2635.44,2686.92,2738.4,2789.88,2841.36,2892.84,2944.32,2995.8,3047.28,3098.76,3150.24,3201.72,3253.2],
            [1682.4,1735.2,1788,1840.8,1893.6,1946.4,1999.2,2052,2104.8,2157.6,2210.4,2263.2,2316,2368.8,2421.6,2474.4,2527.2,2580,2632.8,2685.6,2738.4,2791.2,2844,2896.8,2949.6,3002.4,3055.2,3108,3160.8,3213.6,3266.4,3319.2]

    ];
vartabCouleur =[
    [1311.672,1344.96,1378.248,1411.536,1444.824,1478.112,1511.4,1544.688,1577.976,1611.264,1644.552,1677.84,1711.128,1744.416,1777.704,1810.992,1844.28,1877,568,1910.856,1944.144,1977.432,2010.72,2044.008,2077.296,2110.584,2143.872,2177.16,2210.448,2243.736,2277.024,2310.312,2343.6],
    [1344.96,1378.248,1411.536,1444.824,1478.112,1511.4,1544.688,1577.976,1611.264,1644.552,1677.84,1711.128,1744.416,1777.704,1810.992,1844.28,1877.568,1910.856,1944.144],
    [1977.432,2010.72,2044.008,2077.296,2110.584,2143.872,2177.16,2210.448,2243.736,2277.024,2310.312,2343.6],
    [1380,1415.04,1450.08,1485.12,1520.16,1555.2,1590.24,1625.28,1660.32,1695.36,1730.4,1765.44,1800.48,1835.52,1870.56,1905.6,1940.64,1975.68,2010.72,2045.76,2080.8,2115.84,2150.88,2185.92,2220.96,2256,2291.04,2326.08,2361.12,2396.16,2431.2],
    [1415.04,1451.832,1488.624,1525.416,1562.208,1599,1635.792,1672.584,1709.376,1746.168,1782.96,1819.752,1856.544,1893.336,1930.128,1966.92,2003.712,2040.504,2077.296,2114.088,2150.88,2187.672,2224.464,2261.256,2298.048,2334.84,2371.632,2408.424,2445.216,2482.008,2518.8],
    [1450.08,1488.624,1527.168,1565.712,1604.256,1642.8,1681.344,1719.888,1758.432,1796.976,1835.52,1874.064,1912.608,1951.152,1989.696,2028.24,2066.784,2105.328,2143.872,2182.416,2220.96,2259.504,2298.048,2336.592,2375.136,2413.68,2452.224,2490.768,2529.312,2567.856,2606.4],
    [1485.12,1525.416,1565.712,1606.008,1646.304,1686.6,1726.896,1767.192,1807.488,1847.784,1888.08,1928.376,1968.672,2008.968,2049.264,2089.56,2129.856,2170.152,2210.448,2250.744,2291.04,2331.336,2371.632,2411.928,2452.224,2492.52,2532.816,2573.112,2613.408,2653.704,2694],
    [1520.16,1562.208,1604.256,1646.304,1688.352,1730.4,1772.448,1814.496,1856.544,1898.592,1940.64,1982.688,2024.736,2066.784,2108.832,2150.88,2192.928,2234.976,2277.024,2319.072,2361.12,2403.168,2445.216,2487.264,2529.312,2571.36,2613.408,2655.456,2697.504,2739.552,2781.6],
    [1555.2,1599,1642.8,1686.6,1730.4,1774.2,1818,1861.8,1905.6,1949.4,1993.2,2037,2080.8,2124.6,2168.4,2212.2,2256,2299.8,2343.6,2387.4,2431.2,2475,2518.8,2562.6,2606.4,2650.2,2694,2737.8,2781.6,2825.4,2869.2],
    [1590.24,1635.792,1681.344,1726.896,1772.448,1818,1863.552,1909.104,1954.656,2000.208,2045.76,2091.312,2136.864,2182.416,2227.968,2273.52,2319.072,2364.624,2410.176,2455.728,2501.28,2546.832,2592.384,2637.936,2683.488,2729.04,2774.592,2820.144,2865.696,2911.248,2956.8],
    [1625.28,1672.584,1719.888,1767.192,1814.496,1861.8,1909.104,1956.408,2003.712,2051.016,2098.32,2145.624,2192.928,2240.232,2287.536,2334.84,2382.144,2429.448,2476.752,2524.056,2571.36,2618.664,2665.968,2713.272,2760.576,2807.88,2855.184,2902.488,2949.792,2997.096,3044.4],
    [1660.32,1709.376,1758.432,1807.488,1856.544,1905.6,1954.656,2003.712,2052.768,2101.824,2150.88,2199.936,2248.992,2298.048,2347.104,2396.16,2445.216,2494.272,2543.328,2592.384,2641.44,2690.496,2739.552,2788.608,2837.664,2886.72,2935.776,2984.832,3033.888,3082.944,3132],
    [1695.36,1746.168,1796.976,1847.784,1898.592,1949.4,2000.208,2051.016,2101.824,2152.632,2203.44,2254.248,2305.056,2355.864,2406.672,2457.48,2508.288,2559.096,2609.904,2660.712,2711.52,2762.328,2813.136,2863.944,2914.752,2965.56,3016.368,3067.176,3117.984,3168.792,3219.6],
    [1730.4,1782.96,1835.52,1888.08,1940.64,1993.2,2045.76,2098.32,2150.88,2203.44,2256,2308.56,2361.12,2413.68,2466.24,2518.8,2571.36,2623.92,2676.48,2729.04,2781.6,2834.16,2886.72,2939.28,2991.84,3044.4,3096.96,3149.52,3202.08,3254.64,3307.2],
    [1765.44,1819.752,1874.064,1928.376,1982.688,2037,2091.312,2145.624,2199.936,2254.248,2308.56,2362.872,2417.184,2471.496,2525.808,2580.12,2634.432,2688.744,2743.056,2797.368,2851.68,2905.992,2960.304,3014.616,3068.928,3123.24,3177.552,3231.864,3286.176,3340.488,3394.8],
    [1800.48,1856.544,1912.608,1968.672,2024.736,2080.8,2136.864,2192.928,2248.992,2305.056,2361.12,2417.184,2473.248,2529.312,2585.376,2641.44,2697.504,2753.568,2809.632,2865.696,2921.76,2977.824,3033.888,3089.952,3146.016,3202.08,3258.144,3314.208,3370.272,3426.336,3482.4],
    [1835.52,1893.336,1951.152,2008.968,2066.784,2124.6,2182.416,2240.232,2298.048,2355.864,2413.68,2471.496,2529.312,2587.128,2644.944,2702.76,2760.576,2818.392,2876.208,2934.024,2991.84,3049.656,3107.472,3165.288,3223.104,3280.92,3338.736,3396.552,3454.368,3512.184,3570],
    [1870.56,1930.128,1989.696,2049.264,2108.832,2168.4,2227.968,2287.536,2347.104,2406.672,2466.24,2525.808,2585.376,2644.944,2704.512,2764.08,2823.648,2883.216,2942.784,3002.352,3061.92,3121.488,3181.056,3240.624,3300.192,3359.76,3419.328,3478.896,3538.464,3598.032,3657.6],
    [1905.6,1966.92,2028.24,2089.56,2150.88,2212.2,2273.52,2334.84,2396.16,2457.48,2518.8,2580.12,2641.44,2702.76,2764.08,2825.4,2886.72,2948.04,3009.36,3070.68,3132,3193.32,3254.64,3315.96,3377.28,3438.6,3499.92,3561.24,3622.56,3683.88,3745.2],
    [1940.64,2003.712,2066.784,2129.856,2192.928,2256,2319.072,2382.144,2445.216,2508.288,2571.36,2634.432,2697.504,2760.576,2823.648,2886.72,2949.792,3012.864,3075.936,3139.008,3202.08,3265.152,3328.224,3391.296,3454.368,3517.44,3580.512,3643.584,3706.656,3769.728,3832.8],
    [1975.68,2040.504,2105.328,2170.152,2234.976,2299.8,2364.624,2429.448,2494.272,2559.096,2623.92,2688.744,2753.568,2818.392,2883.216,2948.04,3012.864,3077.688,3142.512,3207.336,3272.16,3336.984,3401.808,3466.632,3531.456,3596.28,3661.104,3725.928,3790.752,3855.576,3920.4],
    [2010.72,2077.296,2143.872,2210.448,2277.024,2343.6,2410.176,2476.752,2543.328,2609.904,2676.48,2743.056,2809.632,2876.208,2942.784,3009.36,3075.936,3142.512,3209.088,3275.664,3342.24,3408.816,3475.392,3541.968,3608.544,3675.12,3741.696,3808.272,3874.848,3941.424,4008],
    [2045.76,2114.088,2182.416,2250.744,2319.072,2387.4,2455.728,2524.056,2592.384,2660.712,2729.04,2797.368,2865.696,2934.024,3002.352,3070.68,3139.008,3207.336,3275.664,3343.992,3412.32,3480.648,3548.976,3617.304,3685.632,3753.96,3822.288,3890.616,3958.944,4027.272,4095.6],
    [2080.8,2150.88,2220.96,2291.04,2361.12,2431.2,2501.28,2571.36,2641.44,2711.52,2781.6,2851.68,2921.76,2991.84,3061.92,3132,3202.08,3272.16,3342.24,3412.32,3482.4,3552.48,3622.56,3692.64,3762.72,3832.8,3902.88,3972.96,4043.04,4113.12,4183.2]
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
var hauteur=document.getElementById('hauteurId').value;
console.log("hauteur"+ hauteur);
if(refoulement < hauteur ){
    document.getElementById("war").innerHTML = " refoulement doit etre supérieur à votre hauteur!";
}else{
    document.getElementById("war").innerHTML="";
}

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

    var couleur =  $("input[name='couleur']:checked").val();

    var autreral=document.getElementById('coul').value;

    var poigne= $("input[name='poigne']:checked").val();

    document.getElementById("quantite").innerHTML = "Vous avez choisi :"   +quantite +"-PORTE DE GARAGE  À RAINURES HORIZONTAL ";

    document.getElementById("largeur").innerHTML = "Votre largeur est de : " +largeur  ;

    document.getElementById("hauteur").innerHTML ="Votre Hauteur est de : "   +hauteur;
    document.getElementById("ecd").innerHTML ="Votre coinçon gauche est de : "  +coinçonD;
    document.getElementById("ecg").innerHTML ="votre coinçon droite est de :"  +coinçonG;
    document.getElementById("linteau").innerHTML ="Vous avez un linteau de :"  +linteau;
    document.getElementById("refoulement1").innerHTML ="Votre refoulement est de :"  +refoulement;
    document.getElementById("couleurchoisi").innerHtml="vous avez choisi comme couleur le :"  +couleur;
    Document.getElementById("RAL1").innerHTML="Vous avez choisi autre ral :" +autreral;
    document.getElementById("poi").innerHTML="vous avez sélectionnez" + " :" +poigne;



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
