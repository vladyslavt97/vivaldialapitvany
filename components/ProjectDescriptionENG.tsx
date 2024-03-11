import { motion } from "framer-motion";

type Props = {};

export default function DescriptionENG({}: Props) {
    return (
        <div className="text-black">
            <motion.p
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 3, delay: 0.3 }}
                className="py-5 text-right"
            >
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-green-500/90 font-serif[text-shadow:_1px_1px_10px_rgb(250_250_250_/_100%)]">
                    Eszter Fellegi
                </span>{" "}
                – Founder
            </motion.p>

            <motion.p
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 3 }}
                className="[text-shadow:_1px_1px_10px_rgb(250_250_250_/_100%)]"
            >
                ″Vivaldi, the most famous violinist and composer of his day, was
                also a passionate educator who acted as the leading maestro of
                the girls&apos; orphanage in Venice, teaching the children of
                the institution. His choir and orchestra were admired all over
                the world. Venice, the Ca&apos; d&apos;Oro Palace, and the
                flourishing Venitian life of the arts, as well as the
                sponsorship of the aristocratic families of the time, are all
                great examples for us. And today, we need the joint efforts of
                benefactors more than ever before. The arts are my passion.{" "}
                <br />
                I myself have been active in art sponsorship for decades in
                Hungary, Italy and Egypt. It&apos;s difficult to list all events
                exhaustively, but I have supported numerous concerts,
                archaeological excavations, events and the Way of the Amber
                Exhibition. With my companies, Ca’ d’Oro Studio and Rovitex, I
                took part in the restoration work of Müpa, the Budapest Opera
                and the Liszt Academy, with the design and use of the original
                Italian fabrics. The arts are my passion.″
                <br />
            </motion.p>
            <br />
            <br />
            <motion.p
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 3, delay: 0.3 }}
            >
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-green-500/90 font-serif[text-shadow:_1px_1px_10px_rgb(250_250_250_/_100%)]">
                    Eszter Fellegi
                </span>{" "}
                – Founder
            </motion.p>

            <motion.hr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                className="my-10 bg-black"
            />

            <motion.p
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 3, delay: 0.6 }}
                className="[text-shadow:_1px_1px_10px_rgb(250_250_250_/_100%)]"
            >
                Vivaldi Foundation – Aims and Activities: The Vivaldi Foundation
                is committed to organising cultural events, enhancing artistic
                and cultural education, training activities and career support
                of the mentored talents as well as the exploration and
                conveyance of the Hungarian intellectual and artistic heritage.
                <br />
                The foundation aims to achieve the above by facilitating
                lectures, performances, concerts, exhibitions, camps and other
                events while preserving and passing on Hungarian cultural
                assets. The foundation concentrates on the young generation of
                artists at the outset of their careers and on the support of the
                continuously developing online setting and the virtual
                dissemination of culture.
            </motion.p>
        </div>
    );
}
