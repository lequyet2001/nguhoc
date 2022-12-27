import { weightedGraph } from "./class"
import { points } from "./data";
export let g = new weightedGraph();
points.forEach(e => {
    g.addVertex(e.name)
});

g.addEdge("1", "2", points);
g.addEdge("1", "5", points);
g.addEdge("2", "3", points);
g.addEdge("2", "4", points);
g.addEdge("3", "6", points);
g.addEdge("3", "26", points);
g.addEdge("4", "5", points);
g.addEdge("5", "15", points);
g.addEdge("6", "7", points);
g.addEdge("6", "13", points);
g.addEdge("7", "8", points);
g.addEdge("8", "9", points);
g.addEdge("9", "10", points);
g.addEdge("10", "11", points);
g.addEdge("10", "12", points);
g.addEdge("13", "14", points);
g.addEdge("13", "15", points);
g.addEdge("15", "16", points);
g.addEdge("15", "38", points);
g.addEdge("16", "17", points);
g.addEdge("16", "21", points);
g.addEdge("17", "18", points);
g.addEdge("17", "19", points);
g.addEdge("18", "19", points);
g.addEdge("18", "20", points);
g.addEdge("20", "23", points);
g.addEdge("21", "22", points);
g.addEdge("21", "41", points);
g.addEdge("22", "23", points);
g.addEdge("22", "24", points);
g.addEdge("23", "24", points);
g.addEdge("24", "25", points);
g.addEdge("25", "105", points);
g.addEdge("26", "27", points);
g.addEdge("26", "28", points);
g.addEdge("28", "29", points);
g.addEdge("29", "30", points);
g.addEdge("29", "34", points);
g.addEdge("30", "31", points);
g.addEdge("30", "33", points);
g.addEdge("31", "32", points);
g.addEdge("34", "36", points);
g.addEdge("35", "36", points);
g.addEdge("36", "37", points);
g.addEdge("37", "104", points);
g.addEdge("37", "163", points);
g.addEdge("38", "39", points);
g.addEdge("38", "40", points);
g.addEdge("39", "40", points);
g.addEdge("39", "42", points);
g.addEdge("40", "41", points);
g.addEdge("41", "51", points);
g.addEdge("41", "55", points);
g.addEdge("42", "43", points);
g.addEdge("43", "44", points);
g.addEdge("44", "45", points);
g.addEdge("45", "46", points);
g.addEdge("45", "55", points);
g.addEdge("46", "47", points);
g.addEdge("46", "58", points);
g.addEdge("46", "60", points);
g.addEdge("47", "48", points);
g.addEdge("47", "60", points);
g.addEdge("48", "49", points);
g.addEdge("48", "50", points);
g.addEdge("49", "92", points);
g.addEdge("49", "96", points);
g.addEdge("50", "61", points);
g.addEdge("51", "52", points);
g.addEdge("51", "75", points);
g.addEdge("52", "53", points);
g.addEdge("53", "54", points);
g.addEdge("53", "56", points);
g.addEdge("55", "56", points);
g.addEdge("56", "57", points);
g.addEdge("57", "58", points);
g.addEdge("58", "59", points);
g.addEdge("58", "60", points);
g.addEdge("58", "72", points);
g.addEdge("60", "61", points);
g.addEdge("60", "62", points);
g.addEdge("61", "65", points);
g.addEdge("62", "63", points);
g.addEdge("62", "64", points);
g.addEdge("64", "67", points);
g.addEdge("64", "68", points);
g.addEdge("65", "66", points);
g.addEdge("65", "68", points);
g.addEdge("67", "73", points);
g.addEdge("68", "69", points);
g.addEdge("68", "70", points);
g.addEdge("70", "71", points);
g.addEdge("70", "74", points);
g.addEdge("72", "73", points);
g.addEdge("72", "75", points);
g.addEdge("72", "77", points);
g.addEdge("73", "74", points);
g.addEdge("74", "77", points);
g.addEdge("74", "79", points);
g.addEdge("75", "76", points);
g.addEdge("77", "78", points);
g.addEdge("79", "80", points);
g.addEdge("79", "81", points);
g.addEdge("80", "83", points);
g.addEdge("80", "102", points);
g.addEdge("81", "82", points);
g.addEdge("81", "84", points);
g.addEdge("82", "83", points);
g.addEdge("82", "85", points);
g.addEdge("83", "86", points);
g.addEdge("84", "85", points);
g.addEdge("84", "87", points);
g.addEdge("84", "88", points);
g.addEdge("85", "86", points);
g.addEdge("86", "87", points);
g.addEdge("86", "99", points);
g.addEdge("87", "89", points);
g.addEdge("87", "98", points);
g.addEdge("88", "89", points);
g.addEdge("89", "90", points);
g.addEdge("90", "94", points);
g.addEdge("90", "97", points);
g.addEdge("91", "92", points);
g.addEdge("91", "94", points)
g.addEdge("92", "93", points);
g.addEdge("93", "94", points);
g.addEdge("94", "95", points);
g.addEdge("95", "96", points);
g.addEdge("95", "97", points);
g.addEdge("96", "170", points);
g.addEdge("96", "187", points);
g.addEdge("97", "98", points);
g.addEdge("97", "169", points);
g.addEdge("98", "99", points);
g.addEdge("98", "168", points);
g.addEdge("99", "100", points);
g.addEdge("100", "101", points);
g.addEdge("101", "102", points);
g.addEdge("101", "168", points);
g.addEdge("102", "103", points);
g.addEdge("103", "104", points);
g.addEdge("103", "164", points);
g.addEdge("104", "105", points);
g.addEdge("106", "107", points);
g.addEdge("107", "108", points);
g.addEdge("107", "127", points);
g.addEdge("108", "109", points);
g.addEdge("108", "110", points);
g.addEdge("110", "111", points);
g.addEdge("111", "112", points);
g.addEdge("112", "113", points);
g.addEdge("112", "115", points);
g.addEdge("113", "114", points);
g.addEdge("113", "156", points);
g.addEdge("114", "120", points);
g.addEdge("114", "158", points);
g.addEdge("115", "116", points);
g.addEdge("115", "117", points);
g.addEdge("115", "119", points);
g.addEdge("118", "119", points);
g.addEdge("119", "120", points);
g.addEdge("119", "122", points);
g.addEdge("120", "123", points);
g.addEdge("121", "122", points);
g.addEdge("122", "123", points);
g.addEdge("122", "125", points);
g.addEdge("123", "126", points);
g.addEdge("124", "125", points);
g.addEdge("125", "126", points);
g.addEdge("125", "129", points);
g.addEdge("126", "130", points);
g.addEdge("127", "129", points);
g.addEdge("127", "131", points);
g.addEdge("128", "129", points);
g.addEdge("129", "130", points);
g.addEdge("130", "131", points);
g.addEdge("131", "132", points);
g.addEdge("132", "133", points);
g.addEdge("132", "139", points);
g.addEdge("133", "134", points);
g.addEdge("133", "135", points);
g.addEdge("134", "136", points);
g.addEdge("134", "137", points);
g.addEdge("137", "138", points);
g.addEdge("137", "159", points);
g.addEdge("138", "139", points);
g.addEdge("139", "140", points);
g.addEdge("140", "141", points);
g.addEdge("141", "142", points);
g.addEdge("141", "144", points);
g.addEdge("142", "143", points);
g.addEdge("144", "145", points);
g.addEdge("145", "146", points);
g.addEdge("145", "147", points);
g.addEdge("147", "148", points);
g.addEdge("147", "149", points);
g.addEdge("147", "150", points);
g.addEdge("150", "151", points);
g.addEdge("150", "153", points);
g.addEdge("151", "161", points);
g.addEdge("152", "153", points);
g.addEdge("152", "155", points);
g.addEdge("153", "154", points);
g.addEdge("154", "155", points);
g.addEdge("154", "157", points);
g.addEdge("155", "156", points);
g.addEdge("156", "157", points);
g.addEdge("157", "158", points);
g.addEdge("158", "159", points);
g.addEdge("159", "160", points);
g.addEdge("161", "162", points);
g.addEdge("164", "165", points);
g.addEdge("164", "167", points);
g.addEdge("165", "166", points);
g.addEdge("166", "167", points);
g.addEdge("168", "169", points);
g.addEdge("169", "170", points);
g.addEdge("170", "171", points);
g.addEdge("171", "172", points);
g.addEdge("171", "174", points);
g.addEdge("172", "173", points);
g.addEdge("174", "175", points);
g.addEdge("174", "180", points);
g.addEdge("175", "176", points);
g.addEdge("175", "177", points);
g.addEdge("177", "178", points);
g.addEdge("177", "180", points);
g.addEdge("178", "179", points);
g.addEdge("178", "182", points);
g.addEdge("181", "182", points);
g.addEdge("182", "183", points);
g.addEdge("183", "184", points);
g.addEdge("184", "185", points);
g.addEdge("185", "186", points);
g.addEdge("186", "187", points);
g.addEdge("186", "189", points);
g.addEdge("187", "188", points);
g.addEdge("106", "127",points);
g.addEdge("34","106",points);
g.addEdge("189", "190", points);
g.addEdge("189", "191", points);
g.addEdge("191", "192", points);
g.addEdge("192", "207", points);
g.addEdge("192", "215", points);
g.addEdge("193", "196", points);
g.addEdge("193", "199", points);
g.addEdge("193", "200", points);
g.addEdge("193", "215", points);
g.addEdge("194", "196", points);
g.addEdge("195", "196", points);
g.addEdge("196", "197", points);
g.addEdge("197", "198", points);
g.addEdge("200", "201", points);
g.addEdge("200", "202", points);
g.addEdge("200", "203", points);
g.addEdge("203", "204", points);
g.addEdge("203", "205", points);
g.addEdge("204", "206", points);
g.addEdge("207", "208", points);
g.addEdge("207", "209", points);
g.addEdge("208", "210", points);
g.addEdge("210", "211", points);
g.addEdge("210", "212", points);
g.addEdge("211", "213", points);
g.addEdge("213", "214", points);
