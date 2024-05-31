console.log('object');
const trans = {
    en: {
        h: "About Us",
        t: "Babylon Investment and Contracting - General Trade_London",
        p: "Babylon English Steel Company sells and markets metals and iron - from the Sheikha Muhammad Ali Baghlaf International Company to supply iron to the government company SABIC in the Kingdom of Saudi Arabia.The English Babel Steel Company seeks to supply the aforementioned iron to all countries of the world, especially the Arab and Islamic countries, as it implements an industrial strategy aimed at developing the cultural, urban and industrial development witnessed in the region while maintaining their confidence in what distinguishes the English Babylon Company that all types of iron are manufactured to high American specifications.Resistant and one of the finest types of iron in the world.What distinguishes Babel Steel Company is that it links all payment systems to the bank credit system - the most secure in the world and which leaves no room for non - compliance by any party - which ensures that sales and implementation procedures are under the supervision of the bank."
    },
    ar: {
        h: "من نحن :",
        t: "بابل للاستثمار والمقاولات - التجارة العامة_لندن.",
        p: "شركة بابل الإنكليزية للصلب تقوم ببيع وتسويق المعادن والحديد - من شركة الشيخة محمد علي بغلف العالمية بتجهيز حديد شركة سابك الحكومية في المملكة العربية السعودية.تسعى شركة بابل الإنكليزية للحديد إلى توريد الحديد المذكور إلى جميع دول العالم وخاصة الدول العربية والإسلامية، حيث تنفذ استراتيجية صناعية تهدف إلى تطوير التنمية الثقافية والعمرانية والصناعية التي تشهدها المنطقة مع الحفاظ على ثقتهم في ما يميز شركة بابل الانكليزية أن جميع أنواع الحديد مصنعة بمواصفات أمريكية عالية المقاومة ومن أجود أنواع الحديد في العالم.مايميز شركة بابل للحديد أنها تربط كافة أنظمة الدفع بنظام الائتمان البنكي - الأكثر أمانا في العالم والذي لا يترك مجالا لعدم التزام أي طرف - والذي يضمن أن تكون إجراءات البيع والتنفيذ تحت إشراف البنك."},
    tur: {
        h: "Hakkımızda",
        t: "Babylon Yatırım ve Taahhüt - Genel Ticaret_Londra",
        p: "Babylon English Steel Company, metaller ve demir satmakta ve pazarlamaktadır - Sheikha Muhammad Ali Baghlaf Uluslararası Şirketi'nden, Suudi Arabistan Krallığı'ndaki SABIC devlet şirketine demir tedarik etmek için. İngiliz Babel Çelik Şirketi, bahsedilen demiri dünya çapındaki tüm ülkelere, özellikle Arap ve İslam ülkelerine tedarik etmeyi amaçlamaktadır ve bölgede tanık olunan kültürel, kentsel ve endüstriyel gelişmeyi geliştirmeyi amaçlayan bir sanayi stratejisi uygulamaktadır. İngiliz Babylon Şirketi'ni diğerlerinden ayıran özellik, tüm demir türlerinin yüksek Amerikan standartlarına göre üretilmesidir. Dayanıklı ve dünyadaki en kaliteli demir türlerinden biridir. Babel Çelik Şirketi'ni öne çıkaran diğer bir özellik ise, tüm ödeme sistemlerini banka kredi sistemine bağlamasıdır - dünyanın en güvenli sistemi olup, herhangi bir tarafın uyumsuzluk göstermesine olanak tanımaz - bu da satış ve uygulama prosedürlerinin banka gözetiminde olmasını sağlar."
    }
}
const Trans = document.querySelectorAll('.trans');
Trans.forEach(i => i.addEventListener('click', function (e) {
    console.log(i.value);
    setLang(i.value)
}))
function setLang(lang) {
    const eles = document.querySelectorAll('[data-il8n]');
    eles.forEach(ele => {
        const keys = ele.getAttribute("data-il8n");
        ele.textContent = trans[lang][keys];
    })
}