import React, { Fragment, useState } from 'react';
import Rated from './components/Rated';
import Rating from './components/Rating';
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [rating, setRating] = useState<string | boolean>(false)
  return (
    <Fragment>
          <AnimatePresence initial={false}>
        {(rating && (
            <Rated rating={rating} />
        )) || <Rating setRating={setRating} />}
    </AnimatePresence>
    </Fragment>
  );
}

export default App;
