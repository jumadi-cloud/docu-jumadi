import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Roadmap',
    Svg: require('../../static/img/undraw_scrum_board_re_wk7v.svg').default,
    description: <>Semua yang diajarkan dari Fundamental. Setiap tutorial sudah di susun sesuai dengan Roadmap nya. Sehingga yang baru belajar tidak akan tersesat ketika belajar, cukup ikuti, pahami konsepnya dan praktekan.</>,
  },
  {
    title: 'Materi Kekinian',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Materi di sini kami mengambil dari beberapa sumber di antara <i>eBook</i>, <i>Jurnal</i>, <i>Youtube</i>, <i>Internet</i> dan <i>Documentasi Resminya</i> sesuai dengan perkembangan teknologi saat ini. Sehingga yang baru belajar akan
        mendapatkan materi yang pasti sumbernya. Selain itu semua materi akan selalu di update secara berkala dan Mengunakan bahasa indonesia.
      </>
    ),
  },
  {
    title: 'Instruktur Berpengalaman',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Instruktur belajar nya dari praktisi dalam dunia industri. Sehingga yang baru belajar tidak hanya bisa belajar teknologi saja, namun bisa belajar best practice dan kami juga open jika ada yang ingin berpartisipasi dalam pembuatan
        materi atau sharing knowledge.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
