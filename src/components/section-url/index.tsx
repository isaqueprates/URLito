import './style.css';

const SectionUrl = () => {
  return (
    <section className="section">
      <h1 className='sectionUrl-title'>Encurte seus links</h1>
      <p className='sectionUrl-description'>Links são longos. Encurte os links que você deseja compartilhar, e acompanhe enquanto viajam através da internet</p>
      <div className='form-input'>
        <input type="text" name="" className="input-url" placeholder='Cole o seu link aqui'/>
        <button className='btn-url'>ENCURTAR</button>
      </div>
    </section>
  );
}

export default SectionUrl;