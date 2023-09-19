import simpleWebsiteAudit from 'simple-website-audit';

export const audit = async (site) => {
  console.log('Tool::audit');
  const auditInstance = simpleWebsiteAudit();

  const result = await auditInstance
    .setUrls([site])
    .setAudits({
      amp: true,
      redirect: true,
      w3c: true
    })
    .make();

  console.log('Tool::audit done');
  return result;
};
