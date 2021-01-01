import React from 'react';
import '../index.css'
import '../components/atoms/button/index'
import Header from '../components/moleculs/header';
// import Button from '../components/atoms/button/index';
// import Input from '../components/atoms/input';
// import TextArea from '../components/atoms/textArea';

const App: React.FC = () => {
  return (
    <div>
      {/* <Button children="Simpan" /> */}
      {/* <Input label="kolom label" placeholder="masukan nama" /> */}
      {/* <TextArea label="contoh text area" placeholder="masukan place holder"  /> */}
      <Header children="Toserba"/>
    </div>
  );
}

export default App;
