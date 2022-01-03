import Head from 'next/head';
import Overview from '../components/Overview';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { skills } from '../lib/data';
import mongoose from 'mongoose';

import Project from '../db/models/projectModel';
import { conectDB } from '../db/config';

export default function Home({ skillsData, projects }) {
  return (
    <div className='font-sans' id='App'>
      <Head>
        <title>Mosaab Radi</title>
        <meta
          name='description'
          content='mosaab radi, full stack web developer using javascript, Node js and React'
        />
        <meta name='author' content='Mosaab Radi' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='keywords' content='mosaab, full stack, web developer' />
        <link rel='icon' href='/mosaab.svg' />
      </Head>

      <main className='pb-36'>
        {/* overview */}
        <Overview />
        {/* skills */}
        <Skills data={skillsData} />
        {/* projects */}
        <Projects projects={JSON.parse(projects)} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const skillsData = skills;

  await conectDB();

  const projects = await mongoose.model('Project').find();
  // const projects = await Project.find();

  return {
    props: {
      skillsData,
      projects: JSON.stringify(projects),
    },
  };
}
