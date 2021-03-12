/*
  Takes job data as an argument, extracts all the keywords in the listing (eg. role, level, language)
  and returns an array of string keywords 
*/
export const extractKeywords = (job) => {
  const keywords = [];

  if(job.role) {
    keywords.push(job.role);
  }

  if(job.level) {
    keywords.push(job.level);
  }

  if(job.languages && job.languages.length > 0) {
    keywords.push(...job.languages);
  }

  if(job.tools && job.tools.length > 0) {
    keywords.push(...job.tools);
  }

  return keywords;
};

/*
  Takes 2 arguments:
    * jobsData - an array containing objects describing each job offer
    * keywords - an array of String keywords
  
  Returns an array containing job objects that match all of the keywords
*/
export const filterJobsData = (jobsData, keywords) => {
  if(!keywords || keywords.length === 0) {
    return jobsData;
  }

  return jobsData.filter(job => {
    const extractedKeywords = extractKeywords(job);

    const hasMatchingKeywords = keywords.filter(k => extractedKeywords.includes(k)).length === keywords.length;
    return hasMatchingKeywords;
  });
};