import Script from 'next/script';

const SalesIQ = (props) => {
  const hasCode = props.hasOwnProperty('widgetCode');

  return hasCode ? (
    <Script
      strategy='lazyOnload'
      id='zsiqchat'
      dangerouslySetInnerHTML={{
        __html: `
                    var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"${props.widgetCode}", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="${props.domain}";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);
                `,
      }}
    />
  ) : (
    <div style={{ color: 'red' }}>Need to pass widget code</div>
  );
};

export default SalesIQ;
