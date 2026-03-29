export type Language = "hun" | "eng";

type SiteCopy = {
    title: string;
    founderName: string;
    founderRole: string;
    quoteLines: string[];
    aimsParagraphs: string[];
    galleryTitle: string;
    supportIntro: string;
    supportFields: Array<{
        label: string;
        value: string;
    }>;
    copiedLabel: string;
};

export const siteCopy: Record<Language, SiteCopy> = {
    hun: {
        title: "Vivaldi Alapítvány a jövő művészeiért",
        founderName: "Fellegi Eszter",
        founderRole: "Alapító",
        quoteLines: [
            "„Vivaldi, korának leghíresebb hegedűművésze és komponistája szenvedélyes pedagógusként egy velencei leányotthonban az árvákat felkarolva az intézmény vezető mestere volt, kórusának és zenekarának a csodájára jártak.",
            "Velence, a Ca d’Oro Palota, a virágzó velencei művészi élet és az arisztokrata családok mecenatúrája példamutató.",
            "Ma nagyobb szükség van művészetorientált támogatók összefogására, mint talán bármikor ezelőtt.",
            "Jómagam évtizedek óta tevékenykedem a mecenatúrában Magyarországon, Olaszországban és Egyiptomban. Nehezen felsorolható hiánytalanul, de megannyi koncert, régészeti ásatás, a “Borostyán útja kiállítás” és rendezvények létrejöttét szponzoráltam.",
            "A “Ca d’Oro Stúdió” cégemmel és a Rovitex céggel karöltve többek között a Müpa, az Opera és a Zeneakadémia felújításában vettem részt, mint az eredeti olasz textíliák tervezésének és kivitelezésének együttműködője. A művészet a szenvedélyem.”",
        ],
        aimsParagraphs: [
            "A Vivaldi alapítvány célja és tevékenysége: A Vivaldi Alapítvány célja kulturális programok szervezése, művészeti, kulturális nevelés, oktatás és a támogatottak művészeti pályájának elősegítése, a magyar szellemi, művészeti értékek és hagyományok feltárása és megismertetése.",
            "Mindezt előadások, koncertek, kiállítások, táborok és egyéb rendezvények szervezésével kívánja elérni úgy, hogy közben kulturális örökségünket megőrizzük és figyelmet fordítunk annak közvetítésére. Az alapítvány kifejezetten nagy figyelmet fordít a fiatal, pályakezdő korosztályra, illetve a folyamatosan fejlődő internetes kultúra és virtuális közművelődés támogatására.",
        ],
        galleryTitle: "Képtár",
        supportIntro:
            "Az alapítvány folyamatosan fogadja a támogatásokat az alábbi címen:",
        supportFields: [
            { label: "Adószám:", value: "19350736-2-13" },
            { label: "Nyilvántartási szám:", value: "13-01-0004344" },
            {
                label: "Bankszámlaszám:",
                value: "10300002-13421668-00014909",
            },
            { label: "Elérhetőség:", value: "info@vivaldialapitvany.hu" },
        ],
        copiedLabel: "Másolva",
    },
    eng: {
        title: "Vivaldi Foundation for the artists of the future",
        founderName: "Eszter Fellegi",
        founderRole: "Founder",
        quoteLines: [
            "″Vivaldi, the most famous violinist and composer of his day, was also a passionate educator who acted as the leading maestro of the girls' orphanage in Venice, teaching the children of the institution. His choir and orchestra were admired all over the world. Venice, the Ca' d'Oro Palace, and the flourishing Venitian life of the arts, as well as the sponsorship of the aristocratic families of the time, are all great examples for us. And today, we need the joint efforts of benefactors more than ever before. The arts are my passion.",
            "I myself have been active in art sponsorship for decades in Hungary, Italy and Egypt. It's difficult to list all events exhaustively, but I have supported numerous concerts, archaeological excavations, events and the Way of the Amber Exhibition. With my companies, Ca’ d’Oro Studio and Rovitex, I took part in the restoration work of Müpa, the Budapest Opera and the Liszt Academy, with the design and use of the original Italian fabrics. The arts are my passion.″",
        ],
        aimsParagraphs: [
            "Vivaldi Foundation – Aims and Activities: The Vivaldi Foundation is committed to organising cultural events, enhancing artistic and cultural education, training activities and career support of the mentored talents as well as the exploration and conveyance of the Hungarian intellectual and artistic heritage.",
            "The foundation aims to achieve the above by facilitating lectures, performances, concerts, exhibitions, camps and other events while preserving and passing on Hungarian cultural assets. The foundation concentrates on the young generation of artists at the outset of their careers and on the support of the continuously developing online setting and the virtual dissemination of culture.",
        ],
        galleryTitle: "Gallery",
        supportIntro:
            "Donations are welcome by bank transfer. Please use the details below:",
        supportFields: [
            { label: "Tax number:", value: "19350736-2-13" },
            { label: "Registration number:", value: "13-01-0004344" },
            {
                label: "Bank account number:",
                value: "10300002-13421668-00014909",
            },
            { label: "Contact:", value: "info@vivaldialapitvany.hu" },
        ],
        copiedLabel: "Copied",
    },
};
