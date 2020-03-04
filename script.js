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


var tabStandard = [
    [1112.4,1135.2,1158,1180.8,1203.6,1226.4,1249.2,1272,1294.8,1317.6,1340.4,1363.2,1386,1408.8,1431.6,1454.4,1477.2,1500,1522.8,1545.6,1568.4,1591.2,1614,1636.8,1659.6,1682.4,1705.2,1728,1750.8,1773.6,1796.4],
    [1135.2,1159.2,1183.2,1207.2,1231.2,1255.2,1279.2,1303.2,1327.2,1351.2,1375.2,1399.2,1423.2,1447.2,1471.2,1495.2,1519.2,1543.2,1567.2,1591.2,1615.2,1639.2,1663.2,1687.2,1711.2,1735.2,1759.2,1783.2,1807.2,1831.2,1855.2],
    [1158,1183.2,1208.4,1233.6,1258.8,1284,1309.2,1334.4,1359.6,1384.8,1410,1435.2,1460.4,1485.6,1510.8,1536,1561.2,1586.4,1611.6,1636.8,1662,1687.2,1712.4,1737.6,1762.8,1788,1813.2,1838.4,1863.6,1888.8,1914],
    [1180.8,1207.2,1233.6,1260,1286.4,1312.8,1339.2,1365.6,1392,1418.4,1444.8,1471.2,1497.6,1524,1550.4,1576.8,1603.2,1629.6,1656,1682.4,1708.8,1735.2,1761.6,1788,1814.4,1840.8,1867.2,1893.6,1920,1946.4,1972.8],
    [1203.6,1231.2,1258.8,1286.4,1314,1341.6,1369.2,1396.8,1424.4,1452,1479.6,1507.2,1534.8,1562.4,1590,1617.6,1645.2,1672.8,1700.4,1728,1755.6,1783.2,1810.8,1838.4,1866,1893.6,1921.2,1948.8,1976.4,2004,2031.6],
    [1226.4,1255.2,1284,1312.8,1341.6,1370.4,1399.2,1428,1456.8,1485.6,1514.4,1543.2,1572,1600.8,1629.6,1658.4,1687.2,1716,1744.8,1773.6,1802.4,1831.2,1860,1888.8,1917.6,1946.4,1975.2,2004,2032.8,2061.6,2090.4],
    [1249.2,1279.2,1309.2,1339.2,1369.2,1399.2,1429.2,1459.2,1489.2,1519.2,1549.2,1579.2,1609.2,1639.2,1669.2,1699.2,1729.2,1759.2,1789.2,1819.2,1849.2,1879.2,1909.2,1939.2,1969.2,1999.2,2029.2,2059.2,2089.2,2119.2,2149.2],
    [1272,1303.2,1334.4,1365.6,1396.8,1428,1459.2,1490.4,1521.6,1552.8,1584,1615.2,1646.4,1677.6,1708.8,1740,1771.2,1802.4,1833.6,1864.8,1896,1927.2,1958.4,1989.6,2020.8,2052,2083.2,2114.4,2145.6,2176.8,2208],
    [1294.8,1327.2,1359.6,1392,1424.4,1456.8,1489.2,1521.6,1554,1586.4,1618.8,1651.2,1683.6,1716,1748.4,1780.8,1813.2,1845.6,1878,1910.4,1942.8,1975.2,2007.6,2040,2072.4,2104.8,2137.2,2169.6,2202,2234.4,2266.8],
    [1317.6,1351.2,1384.8,1418.4,1452,1485.6,1519.2,1552.8,1586.4,1620,1653.6,1687.2,1720.8,1754.4,1788,1821.6,1855.2,1888.8,1922.4,1956,1989.6,2023.2,2056.8,2090.4,2124,2157.6,2191.2,2224.8,2258.4,2292,2325.6],
    [1340.4,1375.2,1410,1444.8,1479.6,1514.4,1549.2,1584,1618.8,1653.6,1688.4,1723.2,1758,1792.8,1827.6,1862.4,1897.2,1932,1966.8,2001.6,2036.4,2071.2,2106,2140.8,2175.6,2210.4,2245.2,2280,2314.8,2349.6,2384.4],
    [1363.2,1399.2,1435.2,1471.2,1507.2,1543.2,1579.2,1615.2,1651.2,1687.2,1723.2,1759.2,1795.2,1831.2,1867.2,1903.2,1939.2,1975.2,2011.2,2047.2,2083.2,2119.2,2155.2,2191.2,2227.2,2263.2,2299.2,2335.2,2371.2,2407.2,2443.2],
    [1386,1423.2,1460.4,1497.6,1534.8,1572,1609.2,1646.4,1683.6,1720.8,1758,1795.2,1832.4,1869.6,1906.8,1944,1981.2,2018.4,2055.6,2092.8,2130,2167.2,2204.4,2241.6,2278.8,2316,2353.2,2390.4,2427.6,2464.8,2502],
    [1408.8,1447.2,1485.6,1524,1562.4,1600.8,1639.2,1677.6,1716,1754.4,1792.8,1831.2,1869.6,1908,1946.4,1984.8,2023.2,2061.6,2100,2138.4,2176.8,2215.2,2253.6,2292,2330.4,2368.8,2407.2,2445.6,2484,2522.4,2560.8],
    [1431.6,1471.2,1510.8,1550.4,1590,1629.6,1669.2,1708.8,1748.4,1788,1827.6,1867.2,1906.8,1946.4,1986,2025.6,2065.2,2104.8,2144.4,2184,2223.6,2263.2,2302.8,2342.4,2382,2421.6,2461.2,2500.8,2540.4,2580,2619.6],
    [1454.4,1495.2,1536,1576.8,1617.6,1658.4,1699.2,1740,1780.8,1821.6,1862.4,1903.2,1944,1984.8,2025.6,2066.4,2107.2,2148,2188.8,2229.6,2270.4,2311.2,2352,2392.8,2433.6,2474.4,2515.2,2556,2596.8,2637.6,2678.4],
    [1477.2,1519.2,1561.2,1603.2,1645.2,1687.2,1729.2,1771.2,1813.2,1855.2,1897.2,1939.2,1981.2,2023.2,2065.2,2107.2,2149.2,2191.2,2233.2,2275.2,2317.2,2359.2,2401.2,2443.2,2485.2,2527.2,2569.2,2611.2,2653.2,2695.2,2737.2],
    [1500,1543.2,1586.4,1629.6,1672.8,1716,1759.2,1802.4,1845.6,1888.8,1932,1975.2,2018.4,2061.6,2104.8,2148,2191.2,2234.4,2277.6,2320.8,2364,2407.2,2450.4,2493.6,2536.8,2580,2623.2,2666.4,2709.6,2752.8,2796],
    [1522.8,1567.2,1611.6,1656,1700.4,1744.8,1789.2,1833.6,1878,1922.4,1966.8,2011.2,2055.6,2100,2144.4,2188.8,2233.2,2277.6,2322,2366.4,2410.8,2455.2,2499.6,2544,2588.4,2632.8,2677.2,2721.6,2766,2810.4,2854.8],
    [1545.6,1591.2,1636.8,1682.4,1728,1773.6,1819.2,1864.8,1910.4,1956,2001.6,2047.2,2092.8,2138.4,2184,2229.6,2275.2,2320.8,2366.4,2412,2457.6,2503.2,2548.8,2594.4,2640,2685.6,2731.2,2776.8,2822.4,2868,2913.6],
    [1568.4,1615.2,1662,1708.8,1755.6,1802.4,1849.2,1896,1942.8,1989.6,2036.4,2083.2,2130,2176.8,2223.6,2270.4,2317.2,2364,2410.8,2457.6,2504.4,2551.2,2598,2644.8,2691.6,2738.4,2785.2,2832,2878.8,2925.6,2972.4],
    [1591.2,1639.2,1687.2,1735.2,1783.2,1831.2,1879.2,1927.2,1975.2,2023.2,2071.2,2119.2,2167.2,2215.2,2263.2,2311.2,2359.2,2407.2,2455.2,2503.2,2551.2,2599.2,2647.2,2695.2,2743.2,2791.2,2839.2,2887.2,2935.2,2983.2,3031.2]
];
vartabCouleur  =
    [
    [1268.35,1299.36,1330.37,1361.38,1392.38,1423.39,1454.40,1485.41,1516.42,1547.42,1578.43,1609.44,1640.45,1671.46,1702.46,1733.47,1764.48,1795.49,1826.50,1857.50,1888.51,1919.52,1950.53,1981.54,2012.54,2043.55,2074.56,2105.57,2136.58,2167.58,2198.59],
    [1299.36,1332.00,1364.64,1397.28,1429.92,1462.56,1495.20,1527.84,1560.48,1593.12,1625.76,1658.40,1691.04,1723.68,1756.32,1788.96,1821.60,1854.24,1886.88,1919.52,1952.16,1984.80,2017.44,2050.08,2082.72,2115.36,2148.00,2180.64,2213.28,2245.92,2278.56],
    [1330.37,1364.64,1398.91,1433.18,1467.46,1501.73,1536.00,1570.27,1604.54,1638.82,1673.09,1707.36,1741.63,1775.90,1810.18,1844.45,1878.72,1912.99,1947.26,1981.54,2015.81,2050.08,2084.35,2118.62,2152.90,2187.17,2221.44,2255.71,2289.98,2324.26,2358.53],
    [1361.38,1397.28,1433.18,1469.09,1504.99,1540.90,1576.80,1612.70,1648.61,1684.51,1720.42,1756.32,1792.22,1828.13,1864.03,1899.94,1935.84,1971.74,2007.65,2043.55,2079.46,2115.36,2151.26,2187.17,2223.07,2258.98,2294.88,2330.78,2366.69,2402.59,2438.50],
    [1392.38,1429.92,1467.46,1504.99,1542.53,1580.06,1617.60,1655.14,1692.67,1730.21,1767.74,1805.28,1842.82,1880.35,1917.89,1955.42,1992.96,2030.50,2068.03,2105.57,2143.10,2180.64,2218.18,2255.71,2293.25,2330.78,2368.32,2405.86,2443.39,2480.93,2518.46],
    [1423.39,1462.56,1501.73,1540.90,1580.06,1619.23,1658.40,1697.57,1736.74,1775.90,1815.07,1854.24,1893.41,1932.58,1971.74,2010.91,2050.08,2089.25,2128.42,2167.58,2206.75,2245.92,2285.09,2324.26,2363.42,2402.59,2441.76,2480.93,2520.10,2559.26,2598.43],
    [1454.40,1495.20,1536.00,1576.80,1617.60,1658.40,1699.20,1740.00,1780.80,1821.60,1862.40,1903.20,1944.00,1984.80,2025.60,2066.40,2107.20,2148.00,2188.80,2229.60,2270.40,2311.20,2352.00,2392.80,2433.60,2474.40,2515.20,2556.00,2596.80,2637.60,2678.40],
    [1485.41,1527.84,1570.27,1612.70,1655.14,1697.57,1740.00,1782.43,1824.86,1867.30,1909.73,1952.16,1994.59,2037.02,2079.46,2121.89,2164.32,2206.75,2249.18,2291.62,2334.05,2376.48,2418.91,2461.34,2503.78,2546.21,2588.64,2631.07,2673.50,2715.94,2758.37],
    [1516.42,1560.48,1604.54,1648.61,1692.67,1736.74,1780.80,1824.86,1868.93,1912.99,1957.06,2001.12,2045.18,2089.25,2133.31,2177.38,2221.44,2265.50,2309.57,2353.63,2397.70,2441.76,2485.82,2529.89,2573.95,2618.02,2662.08,2706.14,2750.21,2794.27,2838.34],
    [1547.42,1593.12,1638.82,1684.51,1730.21,1775.90,1821.60,1867.30,1912.99,1958.69,2004.38,2050.08,2095.78,2141.47,2187.17,2232.86,2278.56,2324.26,2369.95,2415.65,2461.34,2507.04,2552.74,2598.43,2644.13,2689.82,2735.52,2781.22,2826.91,2872.61,2918.30],
    [1578.43,1625.76,1673.09,1720.42,1767.74,1815.07,1862.40,1909.73,1957.06,2004.38,2051.71,2099.04,2146.37,2193.70,2241.02,2288.35,2335.68,2383.01,2430.34,2477.66,2524.99,2572.32,2619.65,2666.98,2714.30,2761.63,2808.96,2856.29,2903.62,2950.94,2998.27],
    [1609.44,1658.40,1707.36,1756.32,1805.28,1854.24,1903.20,1952.16,2001.12,2050.08,2099.04,2148.00,2196.96,2245.92,2294.88,2343.84,2392.80,2441.76,2490.72,2539.68,2588.64,2637.60,2686.56,2735.52,2784.48,2833.44,2882.40,2931.36,2980.32,3029.28,3078.24],
    [1640.45,1691.04,1741.63,1792.22,1842.82,1893.41,1944.00,1994.59,2045.18,2095.78,2146.37,2196.96,2247.55,2298.14,2348.74,2399.33,2449.92,2500.51,2551.10,2601.70,2652.29,2702.88,2753.47,2804.06,2854.66,2905.25,2955.84,3006.43,3057.02,3107.62,3158.21],
    [1671.46,1723.68,1775.90,1828.13,1880.35,1932.58,1984.80,2037.02,2089.25,2141.47,2193.70,2245.92,2298.14,2350.37,2402.59,2454.82,2507.04,2559.26,2611.49,2663.71,2715.94,2768.16,2820.38,2872.61,2924.83,2977.06,3029.28,3081.50,3133.73,3185.95,3238.18],
    [1702.46,1756.32,1810.18,1864.03,1917.89,1971.74,2025.60,2079.46,2133.31,2187.17,2241.02,2294.88,2348.74,2402.59,2456.45,2510.30,2564.16,2618.02,2671.87,2725.73,2779.58,2833.44,2887.30,2941.15,2995.01,3048.86,3102.72,3156.58,3210.43,3264.29,3318.14],
    [1733.47,1788.96,1844.45,1899.94,1955.42,2010.91,2066.40,2121.89,2177.38,2232.86,2288.35,2343.84,2399.33,2454.82,2510.30,2565.79,2621.28,2676.77,2732.26,2787.74,2843.23,2898.72,2954.21,3009.70,3065.18,3120.67,3176.16,3231.65,3287.14,3342.62,3398.11],
    [1764.48,1821.60,1878.72,1935.84,1992.96,2050.08,2107.20,2164.32,2221.44,2278.56,2335.68,2392.80,2449.92,2507.04,2564.16,2621.28,2678.40,2735.52,2792.64,2849.76,2906.88,2964.00,3021.12,3078.24,3135.36,3192.48,3249.60,3306.72,3363.84,3420.96,3478.08],
    [1795.49,1854.24,1912.99,1971.74,2030.50,2089.25,2148.00,2206.75,2265.50,2324.26,2383.01,2441.76,2500.51,2559.26,2618.02,2676.77,2735.52,2794.27,2853.02,2911.78,2970.53,3029.28,3088.03,3146.78,3205.54,3264.29,3323.04,3381.79,3440.54,3499.30,3558.05],
    [1826.50,1886.88,1947.26,2007.65,2068.03,2128.42,2188.80,2249.18,2309.57,2369.95,2430.34,2490.72,2551.10,2611.49,2671.87,2732.26,2792.64,2853.02,2913.41,2973.79,3034.18,3094.56,3154.94,3215.33,3275.71,3336.10,3396.48,3456.86,3517.25,3577.63,3638.02],
    [1857.50,1919.52,1981.54,2043.55,2105.57,2167.58,2229.60,2291.62,2353.63,2415.65,2477.66,2539.68,2601.70,2663.71,2725.73,2787.74,2849.76,2911.78,2973.79,3035.81,3097.82,3159.84,3221.86,3283.87,3345.89,3407.90,3469.92,3531.94,3593.95,3655.97,3717.98],
    [1888.51,1952.16,2015.81,2079.46,2143.10,2206.75,2270.40,2334.05,2397.70,2461.34,2524.99,2588.64,2652.29,2715.94,2779.58,2843.23,2906.88,2970.53,3034.18,3097.82,3161.47,3225.12,3288.77,3352.42,3416.06,3479.71,3543.36,3607.01,3670.66,3734.30,3797.95],
    [1919.52,1984.80,2050.08,2115.36,2180.64,2245.92,2311.20,2376.48,2441.76,2507.04,2572.32,2637.60,2702.88,2768.16,2833.44,2898.72,2964.00,3029.28,3094.56,3159.84,3225.12,3290.40,3355.68,3420.96,3486.24,3551.52,3616.80,3682.08,3747.36,3812.64,3877.92]
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

    console.log(portillon +'je suis portillon');
    var motorisation = $("input[name='motorisation']:checked").val();

    console.log(motorisation +'je suis motor');

    if (motorisation == 'Oui' && portillon == 'true') {


        document.getElementById("securiteId").style.display = "block";


    }

    if (portillon == 'true' && motorisation == 'Oui') {


        document.getElementById("securiteId").style.display = "block";

    }
    if (motorisation == 'Non' && portillon == 'Non') {

        document.getElementById("securiteId").style.display = "none";


    }
    if (portillon == 'true' && motorisation == 'Non') {


        document.getElementById("securiteId").style.display = "none";


    }


    if (motorisation == 'Oui' && portillon == 'Non') {

        document.getElementById("securiteId").style.display = "none";

    }

    if (motorisation == 'Oui' && portillon == 'true') {
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
function portillonaffiche(){
    var portillon = $("input[name='portillon']:checked").val();
    if(portillon=='true'){
        document.getElementById("portillon").style.display="block";
    }else{
        document.getElementById("portillon").style.display="none";
    }
}
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
    }
}
        // document.body.style.backgroundImage = "url('')";
        // $("body").css({"backgroundImage": "url('')"});
        //  document.body.style.backgroundColor ="#e5d691";



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
    if($("#hublot1").is(":checked") && qte==''|| qte>4 ){

        document.getElementById('qth').innerHTML = "veuillez remplir le champs, saisir un nombre ente 1 et 4 ";

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

function finitionAffiche(){

    if (($("#hublot1").is(":checked")) || ($("#hublot2").is(":checked")) || ($("#hublot3").is(":checked"))){

        document.getElementById("finitionaffiche").style.display = "block";
    }else{
        document.getElementById("finitionaffiche").style.display = "none";
    }
        }

function prixFinition() {

    var finition = $("input[name='finition']:checked").val();
      if(  $("#finition1").is(":checked")) {
          $("#finition2").prop('checked', false);

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
        $("#finition1").prop('checked', false);

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


function prixdeverouillage(){

    if(($("#deverouId").is(":checked"))){
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total après ajout prix deverouillage :  " + total);
        total += 76.80;
        document.getElementById("tab").innerHTML = (total.toFixed(2))+ " €";


    }else{
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total sans deverouillage :  " + total);
        total -= 76.80;
        document.getElementById("tab").innerHTML = (total.toFixed(2))+ " €";
    }
}




function prixtelecommande() {

    if (($("#telecommandeId").is(":checked"))) {
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total après ajout prix télécommande :  " + total);
        total += 24;
        document.getElementById("tab").innerHTML = (total.toFixed(2)) + " €";

    }else{
        var total = parseFloat(document.getElementById("tab").innerHTML);
        console.log(total);
        console.log("Total sans prix telecommande  :  " + total);
        total -= 24;
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
