import React from 'react';
import CardOffer from './CardOffer';

const index = () => {
  return (
		<section className='pb-5'>
			<div className="container">
				<div className="offers">
					<div className="offers_info">
           					 {/* content */}
          			</div>
					<ul>
						<li>
             			 	<CardOffer/>
             			</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default index;