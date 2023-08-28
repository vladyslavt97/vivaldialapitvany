import { motion } from "framer-motion";

type Props = {}

export default function Description({}: Props) {
  return (
    <div className='text-black'>
        <motion.p
        initial={{x:-10, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:3}}
        >
            „Vivaldi, korának leghíresebb hegedűművésze és komponistája szenvedélyes pedagógusként
            egy velencei leányotthonban az árvákat felkarolva az intézmény vezető mestere volt,
            kórusának és zenekarának a csodájára jártak.<br/>
            Velence, a Ca d’Oro Palota, a virágzó velencei művészi élet és az arisztokrata családok
            mecenatúrája példamutató.<br/>
            Ma nagyobb szükség van művészetorientált támogatók összefogására, mint talán bármikor
            ezelőtt.<br/>
            Jómagam évtizedek óta tevékenykedem a mecenatúrában Magyarországon,
            Olaszországban és Egyiptomban. Nehezen felsorolható hiánytalanul, de megannyi koncert,
            régészeti ásatás, a “Borostyán útja kiállítás” és rendezvények létrejöttét szponzoráltam.<br/>
            A “Ca d’Oro Stúdió” cégemmel és a Rovitex céggel karöltve többek között a Müpa, az Opera
            és a Zeneakadémia felújításában vettem részt, mint az eredeti olasz textíliák tervezésének és
            kivitelezésének együttműködője. A művészet a szenvedélyem.”
        </motion.p><br/><br/>
        <motion.p
        initial={{x:-10, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:3, delay:0.5}}
        ><span className='font-bold'>Fellegi Eszter</span> – Alapító</motion.p>

        <hr className='my-10'/>

        <motion.p
        initial={{x:-10, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:3, delay:1}}
        >
            A Vivaldi alapítvány célja és tevékenysége:
            A Vivaldi Alapítvány célja kulturális programok szervezése, művészeti, kulturális nevelés, oktatás
            és a támogatottak művészeti pályájának elősegítése, a magyar szellemi, művészeti értékek és
            hagyományok feltárása és megismertetése.<br/>
            Mindezt előadások, koncertek, kiállítások, táborok és egyéb rendezvények szervezésével
            kívánja elérni úgy, hogy közben kulturális örökségünket megőrizzük és figyelmet fordítunk annak
            közvetítésére. Az alapítvány kifejezetten nagy figyelmet fordít a fiatal, pályakezdő korosztályra,
            illetve a folyamatosan fejlődő internetes kultúra és virtuális közművelődés támogatására.
        </motion.p>
    </div>
  )
}