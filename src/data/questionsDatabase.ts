
import networkingQuestions from './networkingQuestions';
import iaasQuestions from './iaasQuestions';
import paasQuestions from './paasQuestions';
import saasQuestions from './saasQuestions';
import devopsQuestions from './devopsQuestions';
import completeInterviewQuestions from './completeInterviewQuestions';

export const getQuestionsDatabase = (category: string) => {
  switch (category) {
    case 'networking':
      return networkingQuestions;
    case 'iaas':
      return iaasQuestions;
    case 'paas':
      return paasQuestions;
    case 'saas':
      return saasQuestions;
    case 'devops':
      return devopsQuestions;
    case 'complete-interview':
      return completeInterviewQuestions;
    default:
      return networkingQuestions; // fallback to networking
  }
};

// Legacy export for backward compatibility
const questionsDatabase = networkingQuestions;
export default questionsDatabase;
