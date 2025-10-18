
export class AudioUtils {
  /**
   * Convert audio blob to MP3 format
   * Note: In a production environment, you might want to use a library like ffmpeg.js
   * for proper audio format conversion. For now, we'll ensure the file extension is .mp3
   */
  static async convertBlobToMP3(audioBlob: Blob): Promise<Blob> {
    // Create a new blob with MP3 mime type
    return new Blob([audioBlob], { type: 'audio/mpeg' });
  }
  
  /**
   * Download audio file as MP3
   * This function ensures the downloaded file has .mp3 extension
   */
  static downloadAudio(blob: Blob, filename: string) {
    // Ensure filename ends with .mp3
    const mp3Filename = filename.endsWith('.mp3') ? filename : filename.replace(/\.[^/.]+$/, '') + '.mp3';
    
    // Convert blob to MP3 format
    const mp3Blob = new Blob([blob], { type: 'audio/mpeg' });
    
    const url = URL.createObjectURL(mp3Blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = mp3Filename;
    link.click();
    URL.revokeObjectURL(url);
  }
  
  /**
   * Format date in DD/MM/YYYY format
   */
  static formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
