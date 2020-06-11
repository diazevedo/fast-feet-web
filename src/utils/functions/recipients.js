export const formatRecipients = (recipients) => {
  return recipients.map((r) => ({
    ...r,
    address: `${r.number}, ${r.street}, ${r.city} - ${r.state}`,
  }));
};
