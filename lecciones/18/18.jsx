import './18.css';
import * as React from 'react';
import Select from 'react-select';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

/*
  Ejercicio 18 ♿️
  Nada que hacer aquí 😎, enfócate en el navegador 👩‍💻 👨‍💻
*/

const [App04, App05, App06, App13, App17] = [
  React.lazy(() => import('../04/04')),
  React.lazy(() => import('../05/05')),
  React.lazy(() => import('../06/06')),
  React.lazy(() => import('../13/13')),
  React.lazy(() => import('../17/17')),
];

const lessons = [
  { label: 'Lección 04', value: '04' },
  { label: 'Lección 05', value: '05' },
  { label: 'Lección 06', value: '06' },
  { label: 'Lección 13', value: '13' },
  { label: 'Lección 17', value: '17' },
];

function App() {
  return (
    <section>
      <LessonRouter />
      <LessonPicker lessons={lessons} />
    </section>
  );
}

function LessonPicker(props) {
  const { lessons } = props;
  const defaultValue =
    JSON.parse(localStorage.getItem('currentLesson')) || lessons[0];

  function onChange(lesson) {
    window.location.href = `/${lesson.value}`;
    window.localStorage.setItem(
      'currentLesson',
      JSON.stringify(lesson)
    );
  }

  return (
    <form className="lesson-picker__form">
      <label className="lesson-picker__label">
        Selecciona una lección:
        <Select
          options={lessons}
          className="lesson-picker__select"
          onChange={onChange}
          menuPlacement="top"
          defaultValue={defaultValue}
        />
      </label>
    </form>
  );
}

function LessonRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navigate to="/03" />} />
        <Route path="04" element={<App04 />} />
        <Route path="05" element={<App05 />} />
        <Route path="06" element={<App06 />} />
        <Route path="13" element={<App13 />} />
        <Route path="17" element={<App17 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
