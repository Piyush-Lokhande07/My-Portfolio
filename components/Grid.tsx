import React from 'react';
import { BentoGrid } from './ui/BentoGrid';
// import { BentoGridItem } from './ui/BentoGridItem'; // ✅ Ensure correct path
import { BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';

const Grid = () => {
      return (
      <section >
            <BentoGrid>
            {gridItems.map(({id,title,description,className,img,imgClassName,titleClassName,spareImg}) => (
            <BentoGridItem
                  id={id}
                  key={id}
                  title={title}
                  description={description}
                  className={className}
                  img={img}
                  imgClassName={imgClassName}
                  titleClassName={titleClassName}
                  spareImg={spareImg}

            />
            ))}
            </BentoGrid>
      </section>
      );
};

export default Grid;
