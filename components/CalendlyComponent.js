
import Script from 'next/script';

const CalendlyComponent = () => {
  return (
    <div>
      <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
      <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-4xl text-3xl font-bold font-eb mb-4 text-black">Si vous avez des questions concernant le cours, planifiez une session pour discuter de vos questions et attentes!</h1>

        <div className="calendly-inline-widget" data-url="https://calendly.com/mahmoudramdane/workflows?hide_event_type_details=1&hide_gdpr_banner=1" style={{color: '#F1F1F1', textColor: '#231F20',  minWidth: "320px", height: "700px" }}></div>
      </div>
      </div>
    </div>
  )
}

export default CalendlyComponent