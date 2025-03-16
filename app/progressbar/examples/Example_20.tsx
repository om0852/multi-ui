"use client";
import React, { useState } from 'react';
import ProgressBar_20 from '../_components/ProgressBar_20';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [selectedFile, setSelectedFile] = useState('project_report.pdf');
  const [fileSize, setFileSize] = useState('3.2 MB');
  const [uploadSpeed, setUploadSpeed] = useState('0 KB/s');
  const [timeRemaining, setTimeRemaining] = useState('--:--');
  
  // Array of sample files
  const sampleFiles = [
    { name: 'project_report.pdf', size: '3.2 MB' },
    { name: 'presentation.pptx', size: '5.7 MB' },
    { name: 'data_analysis.xlsx', size: '2.1 MB' },
    { name: 'product_images.zip', size: '8.4 MB' },
    { name: 'source_code.zip', size: '4.6 MB' }
  ];
  
  // Function to simulate file upload
  const startUpload = () => {
    if (isUploading) return;
    
    // Reset state
    setProgress(0);
    setIsUploading(true);
    setUploadComplete(false);
    
    // Choose a random file
    const randomFile = sampleFiles[Math.floor(Math.random() * sampleFiles.length)];
    setSelectedFile(randomFile.name);
    setFileSize(randomFile.size);
    
    // Parse file size to MB for calculation
    const fileSizeMB = parseFloat(randomFile.size.replace(' MB', ''));
    const totalBytes = fileSizeMB * 1024 * 1024;
    let uploadedBytes = 0;
    
    // Simulate upload with varying speeds
    const interval = setInterval(() => {
      // Calculate elapsed time
      
      // Simulate network fluctuations - upload between 100KB and 500KB per tick
      const bytesUploaded = Math.floor(Math.random() * 400 * 1024) + 100 * 1024;
      uploadedBytes = Math.min(totalBytes, uploadedBytes + bytesUploaded);
      
      // Calculate current upload speed (KB/s)
      const currentSpeed = Math.round(bytesUploaded / 1024);
      setUploadSpeed(`${currentSpeed} KB/s`);
      
      // Calculate progress percentage
      const newProgress = Math.min(100, Math.floor((uploadedBytes / totalBytes) * 100));
      setProgress(newProgress);
      
      // Calculate time remaining
      if (newProgress < 100) {
        const bytesRemaining = totalBytes - uploadedBytes;
        const secondsRemaining = Math.ceil(bytesRemaining / bytesUploaded);
        const minutes = Math.floor(secondsRemaining / 60);
        const seconds = secondsRemaining % 60;
        setTimeRemaining(`${minutes}:${seconds.toString().padStart(2, '0')}`);
      } else {
        setTimeRemaining('00:00');
      }
      
      if (uploadedBytes >= totalBytes || newProgress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        setUploadComplete(true);
        setProgress(100);
      }
    }, 500);
  };
  
  // Function to select a different file
  const changeFile = () => {
    if (isUploading) return;
    
    const randomFile = sampleFiles[Math.floor(Math.random() * sampleFiles.length)];
    setSelectedFile(randomFile.name);
    setFileSize(randomFile.size);
    setUploadComplete(false);
    setProgress(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          File Uploader
        </h1>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
            <div className="flex items-center">
              <span className="text-2xl mr-3">📄</span>
              <div>
                <h3 className="font-medium text-gray-800">{selectedFile}</h3>
                <p className="text-sm text-gray-600">{fileSize}</p>
              </div>
            </div>
            <button
              onClick={changeFile}
              disabled={isUploading}
              className={`text-sm px-2 py-1 rounded ${
                isUploading 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Change
            </button>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Upload Progress</span>
              <span>{progress}%</span>
            </div>
            
            <ProgressBar_20 
              progress={progress}
              height="h-4"
              color="bg-blue-500"
              backgroundColor="bg-gray-200"
              animationDuration={0.5}
              showCounter={false}
            />
            
            <div className="flex justify-between text-xs text-gray-500">
              <span>{isUploading ? uploadSpeed : uploadComplete ? 'Complete' : 'Ready'}</span>
              <span>{isUploading ? `${timeRemaining} remaining` : ''}</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={startUpload}
              disabled={isUploading}
              className={`px-6 py-2 rounded-md font-medium text-white ${
                isUploading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isUploading ? 'Uploading...' : uploadComplete ? 'Upload Again' : 'Start Upload'}
            </button>
          </div>
          
          {uploadComplete && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
              <p className="font-medium">Upload complete!</p>
              <p className="text-sm mt-1">{selectedFile} has been uploaded successfully.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
