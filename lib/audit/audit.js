import simpleWebsiteAudit from 'simple-website-audit';

export const audit = async () => {
  const auditInstance = simpleWebsiteAudit();

  const result = await auditInstance
    .setUrls(['https://www.google.com'])
    .setAudits({
      amp: true,
      redirect: true,
      w3c: true
    })
    .make();
  return result;
};
