
import jsPDF from 'jspdf';

export interface PDFReportData {
  userName: string;
  userEmail: string;
  date: string;
  jobRole: string;
  level: string;
  experience: string;
  totalQuestions: number;
  answeredQuestions: number;
  skippedQuestions: number;
  timeSpent: string;
  score: number;
  questions: Array<{
    question: string;
    answer: string;
    isSkipped: boolean;
  }>;
  strengths: string[];
  improvements: string[];
  recommendations: string[];
  voiceAnalysis?: {
    averageConfidence: number;
    highestConfidence: number;
    lowestConfidence: number;
    totalSegments: number;
    highConfidenceCount: number;
    lowConfidenceCount: number;
  };
}

export class PDFGenerator {
  private static readonly SITE_NAME = 'Interview RSP AI';
  private static readonly SITE_URL = 'https://interview-rsp-ai.lovable.app';
  private static readonly PRIMARY_COLOR = [59, 130, 246]; // Blue-500
  private static readonly SECONDARY_COLOR = [107, 114, 128]; // Gray-500
  private static readonly SUCCESS_COLOR = [34, 197, 94]; // Green-500
  private static readonly WARNING_COLOR = [245, 158, 11]; // Yellow-500
  private static readonly ERROR_COLOR = [239, 68, 68]; // Red-500

  static async generateInterviewReport(data: PDFReportData): Promise<Blob> {
    const doc = new jsPDF();
    let yPosition = 20;
    
    // Add header with branding and styling
    this.addHeader(doc);
    yPosition = 40;
    
    // Add report title with better styling
    doc.setFontSize(24);
    doc.setTextColor(this.PRIMARY_COLOR[0], this.PRIMARY_COLOR[1], this.PRIMARY_COLOR[2]);
    doc.text('Interview Performance Report', 20, yPosition);
    yPosition += 20;
    
    // Add generated date with better formatting
    const formattedDate = new Date().toLocaleDateString('en-GB');
    doc.setFontSize(11);
    doc.setTextColor(this.SECONDARY_COLOR[0], this.SECONDARY_COLOR[1], this.SECONDARY_COLOR[2]);
    doc.text(`Generated on: ${formattedDate}`, 20, yPosition);
    yPosition += 20;
    
    // Candidate Information Section with improved design
    yPosition = this.addCandidateInfo(doc, data, yPosition);
    
    // Performance Summary with visual enhancements
    yPosition = this.addPerformanceSummary(doc, data, yPosition);
    
    // Voice Analysis Section with enhanced presentation
    if (data.voiceAnalysis) {
      yPosition = this.addVoiceAnalysis(doc, data, yPosition);
    }
    
    // Strengths and Improvements with better layout
    yPosition = this.addStrengthsAndImprovements(doc, data, yPosition);
    
    // Questions and Answers with enhanced formatting
    yPosition = this.addQuestionsAndAnswers(doc, data, yPosition);
    
    // Add footer to all pages
    this.addFooterToAllPages(doc);
    
    return new Blob([doc.output('blob')], { type: 'application/pdf' });
  }

  private static addHeader(doc: jsPDF) {
    // Add company logo area (placeholder)
    doc.setFillColor(this.PRIMARY_COLOR[0], this.PRIMARY_COLOR[1], this.PRIMARY_COLOR[2]);
    doc.rect(20, 10, 170, 20, 'F');
    
    // Add company name
    doc.setFontSize(16);
    doc.setTextColor(255, 255, 255);
    doc.text(this.SITE_NAME, 25, 24);
    
    // Add tagline
    doc.setFontSize(10);
    doc.text('AI-Powered Interview Practice Platform', 25, 28);
  }

  private static addCandidateInfo(doc: jsPDF, data: PDFReportData, yPosition: number): number {
    // Section header with background
    doc.setFillColor(248, 250, 252); // Gray-50
    doc.rect(20, yPosition - 5, 170, 15, 'F');
    
    doc.setFontSize(16);
    doc.setTextColor(this.PRIMARY_COLOR[0], this.PRIMARY_COLOR[1], this.PRIMARY_COLOR[2]);
    doc.text('Candidate Information', 25, yPosition + 5);
    yPosition += 20;
    
    // Candidate details in a structured format
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    
    const candidateInfo = [
      ['Name:', data.userName],
      ['Email:', data.userEmail],
      ['Job Role:', data.jobRole],
      ['Experience Level:', data.experience],
      ['Interview Date:', data.date]
    ];
    
    candidateInfo.forEach(([label, value]) => {
      doc.setFont('helvetica', 'bold');
      doc.text(label, 25, yPosition);
      doc.setFont('helvetica', 'normal');
      doc.text(value, 70, yPosition);
      yPosition += 7;
    });
    
    return yPosition + 15;
  }

  private static addPerformanceSummary(doc: jsPDF, data: PDFReportData, yPosition: number): number {
    // Check if new page is needed
    if (yPosition > 220) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Section header
    doc.setFillColor(248, 250, 252);
    doc.rect(20, yPosition - 5, 170, 15, 'F');
    
    doc.setFontSize(16);
    doc.setTextColor(this.PRIMARY_COLOR[0], this.PRIMARY_COLOR[1], this.PRIMARY_COLOR[2]);
    doc.text('Performance Summary', 25, yPosition + 5);
    yPosition += 25;
    
    // Overall score with color coding
    const scoreColor = data.score >= 80 ? this.SUCCESS_COLOR : 
                      data.score >= 60 ? this.WARNING_COLOR : this.ERROR_COLOR;
    
    doc.setFontSize(36);
    doc.setTextColor(scoreColor[0], scoreColor[1], scoreColor[2]);
    doc.text(`${data.score}`, 25, yPosition);
    
    doc.setFontSize(14);
    doc.setTextColor(this.SECONDARY_COLOR[0], this.SECONDARY_COLOR[1], this.SECONDARY_COLOR[2]);
    doc.text('/100', 45, yPosition);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('Overall Score', 25, yPosition + 10);
    
    // Performance metrics in grid format
    yPosition += 25;
    const metrics = [
      ['Questions Answered', `${data.answeredQuestions}/${data.totalQuestions}`],
      ['Questions Skipped', `${data.skippedQuestions}`],
      ['Time Spent', data.timeSpent],
      ['Completion Rate', `${Math.round((data.answeredQuestions / data.totalQuestions) * 100)}%`]
    ];
    
    metrics.forEach(([label, value], index) => {
      const x = 25 + (index % 2) * 85;
      const y = yPosition + Math.floor(index / 2) * 20;
      
      doc.setFontSize(10);
      doc.setTextColor(this.SECONDARY_COLOR[0], this.SECONDARY_COLOR[1], this.SECONDARY_COLOR[2]);
      doc.text(label, x, y);
      
      doc.setFontSize(14);
      doc.setTextColor(this.PRIMARY_COLOR[0], this.PRIMARY_COLOR[1], this.PRIMARY_COLOR[2]);
      doc.text(value, x, y + 8);
    });
    
    return yPosition + 50;
  }

  private static addVoiceAnalysis(doc: jsPDF, data: PDFReportData, yPosition: number): number {
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Section header
    doc.setFillColor(248, 250, 252);
    doc.rect(20, yPosition - 5, 170, 15, 'F');
    
    doc.setFontSize(16);
    doc.setTextColor(this.PRIMARY_COLOR[0], this.PRIMARY_COLOR[1], this.PRIMARY_COLOR[2]);
    doc.text('Voice Confidence Analysis', 25, yPosition + 5);
    yPosition += 25;
    
    if (data.voiceAnalysis) {
      const voiceMetrics = [
        ['Average Confidence', `${(data.voiceAnalysis.averageConfidence * 100).toFixed(1)}%`],
        ['Highest Confidence', `${(data.voiceAnalysis.highestConfidence * 100).toFixed(1)}%`],
        ['Lowest Confidence', `${(data.voiceAnalysis.lowestConfidence * 100).toFixed(1)}%`],
        ['Total Voice Segments', `${data.voiceAnalysis.totalSegments}`],
        ['High Confidence Segments', `${data.voiceAnalysis.highConfidenceCount}`],
        ['Low Confidence Segments', `${data.voiceAnalysis.lowConfidenceCount}`]
      ];
      
      voiceMetrics.forEach(([label, value], index) => {
        const x = 25 + (index % 2) * 85;
        const y = yPosition + Math.floor(index / 2) * 15;
        
        doc.setFontSize(10);
        doc.setTextColor(this.SECONDARY_COLOR[0], this.SECONDARY_COLOR[1], this.SECONDARY_COLOR[2]);
        doc.text(label, x, y);
        
        doc.setFontSize(12);
        doc.setTextColor(this.PRIMARY_COLOR[0], this.PRIMARY_COLOR[1], this.PRIMARY_COLOR[2]);
        doc.text(value, x, y + 8);
      });
      
      yPosition += 60;
    }
    
    return yPosition;
  }

  private static addStrengthsAndImprovements(doc: jsPDF, data: PDFReportData, yPosition: number): number {
    if (yPosition > 180) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Strengths section
    doc.setFillColor(220, 252, 231); // Green-50
    doc.rect(20, yPosition - 5, 170, 15, 'F');
    
    doc.setFontSize(16);
    doc.setTextColor(this.SUCCESS_COLOR[0], this.SUCCESS_COLOR[1], this.SUCCESS_COLOR[2]);
    doc.text('Strengths', 25, yPosition + 5);
    yPosition += 20;
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    data.strengths.forEach((strength) => {
      doc.text(`• ${strength}`, 25, yPosition);
      yPosition += 7;
    });
    
    yPosition += 15;
    
    // Check for new page
    if (yPosition > 220) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Areas for Improvement section
    doc.setFillColor(254, 243, 199); // Yellow-50
    doc.rect(20, yPosition - 5, 170, 15, 'F');
    
    doc.setFontSize(16);
    doc.setTextColor(this.WARNING_COLOR[0], this.WARNING_COLOR[1], this.WARNING_COLOR[2]);
    doc.text('Areas for Improvement', 25, yPosition + 5);
    yPosition += 20;
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    data.improvements.forEach((improvement) => {
      doc.text(`• ${improvement}`, 25, yPosition);
      yPosition += 7;
    });
    
    return yPosition + 20;
  }

  private static addQuestionsAndAnswers(doc: jsPDF, data: PDFReportData, yPosition: number): number {
    // New page for questions
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Section header
    doc.setFillColor(248, 250, 252);
    doc.rect(20, yPosition - 5, 170, 15, 'F');
    
    doc.setFontSize(16);
    doc.setTextColor(this.PRIMARY_COLOR[0], this.PRIMARY_COLOR[1], this.PRIMARY_COLOR[2]);
    doc.text('Questions and Answers', 25, yPosition + 5);
    yPosition += 25;
    
    data.questions.forEach((qa, index) => {
      if (yPosition > 240) {
        doc.addPage();
        yPosition = 20;
      }
      
      // Question number and status
      doc.setFontSize(12);
      doc.setTextColor(this.PRIMARY_COLOR[0], this.PRIMARY_COLOR[1], this.PRIMARY_COLOR[2]);
      doc.text(`Question ${index + 1}`, 25, yPosition);
      
      // Status badge
      if (qa.isSkipped) {
        doc.setTextColor(this.WARNING_COLOR[0], this.WARNING_COLOR[1], this.WARNING_COLOR[2]);
        doc.text('[SKIPPED]', 150, yPosition);
      } else {
        doc.setTextColor(this.SUCCESS_COLOR[0], this.SUCCESS_COLOR[1], this.SUCCESS_COLOR[2]);
        doc.text('[ANSWERED]', 150, yPosition);
      }
      
      yPosition += 10;
      
      // Question text
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      const questionLines = doc.splitTextToSize(qa.question, 165);
      doc.text(questionLines, 25, yPosition);
      yPosition += questionLines.length * 5 + 5;
      
      // Answer text
      if (!qa.isSkipped) {
        doc.setFontSize(10);
        doc.setTextColor(this.SECONDARY_COLOR[0], this.SECONDARY_COLOR[1], this.SECONDARY_COLOR[2]);
        doc.text('Answer:', 25, yPosition);
        yPosition += 5;
        
        const answerLines = doc.splitTextToSize(qa.answer, 165);
        doc.text(answerLines, 25, yPosition);
        yPosition += answerLines.length * 4;
      }
      
      yPosition += 10;
    });
    
    return yPosition;
  }

  private static addFooterToAllPages(doc: jsPDF) {
    const pageCount = doc.getNumberOfPages();
    
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      
      // Footer line
      doc.setLineWidth(0.5);
      doc.setDrawColor(this.SECONDARY_COLOR[0], this.SECONDARY_COLOR[1], this.SECONDARY_COLOR[2]);
      doc.line(20, 280, 190, 280);
      
      // Site branding
      doc.setFontSize(9);
      doc.setTextColor(this.SECONDARY_COLOR[0], this.SECONDARY_COLOR[1], this.SECONDARY_COLOR[2]);
      doc.text(this.SITE_NAME, 20, 287);
      doc.text(this.SITE_URL, 20, 293);
      
      // Page number
      doc.text(`Page ${i} of ${pageCount}`, 190, 287, { align: 'right' });
      
      // Generation timestamp
      const timestamp = new Date().toLocaleString('en-GB');
      doc.text(`Generated: ${timestamp}`, 190, 293, { align: 'right' });
    }
  }
  
  static downloadPDF(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }
}
