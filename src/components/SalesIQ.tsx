import Script from 'next/script';

const SalesIQ = () => {
  return (
    <>
      <Script
        id='zoho-salesiq-init'
        strategy='beforeInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || { ready: function(){} };
          `,
        }}
      />
      <Script
        id='zsiqscript'
        src='https://salesiq.zohopublic.com/widget?wc=siqb961b7fbbf66f28142e579968e8d092fdd6a5bfad51b4d5a4031f9d248da3a4e'
        defer
        strategy='afterInteractive'
      />
    </>
  );
};

export default SalesIQ;
