import React from "react";
import { motion } from "framer-motion";

export default function Overview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, delay: 3 }}
      className="py-8 px-3 lg:w-[50%] text-center lg:text-left"
    >
      <h1 className=" text-4xl pb-5 font-semibold uppercase tracking-widest font-title ">
        Overview
      </h1>

      <h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          laborum dolorem iure nulla at maxime, ad dicta incidunt consectetur,
          atque totam commodi itaque perspiciatis aliquam voluptate maiores
          molestiae ratione numquam. Voluptates vitae odio hic magni, enim
          voluptatum placeat! Ratione veniam officia debitis dignissimos
          officiis illum recusandae repellat dicta minima ad. Lorem ipsum dolor
          sit amet consectetur adipisicing.
        </p>
        <br />
        <p>
          Maiores porro facere quidem aut temporibus quas voluptate quisquam,
          necessitatibus recusandae illo accusamus repudiandae, fuga, sequi
          saepe architecto? Delectus consequatur iure soluta voluptates quae
          sit, animi aut cumque! Labore deleniti omnis qui!
        </p>
      </h3>
    </motion.div>
  );
}
