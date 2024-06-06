#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Funzione ricorsiva per trovare tutti i file con il formato {nome}.test.{js,ts} nella directory corrente
function findTestFiles(directory) {
  // Leggi i contenuti della directory
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error('Errore durante la lettura della directory:', err);
      return;
    }

    // Scansione ricorsiva di ogni file e directory
    files.forEach(file => {
      const filePath = path.join(directory, file);

      // Verifica se è una directory
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Errore durante la verifica del file:', err);
          return;
        }

        // Se è una directory, esegui una ricerca ricorsiva
        if (stats.isDirectory() && file !== "node_modules") {
          findTestFiles(filePath);
        } else {
          // Se è un file, controlla se corrisponde al formato {nome}.test.{js,ts}
          if (/\.(js|ts)$/.test(file) && /\.test\.(js|ts)$/.test(file)) {
            exec(`node ${filePath}`, (err, stdout, stderr) => {
              if (err) {
                console.error(`Errore durante l'esecuzione del file ${filePath}:`, err);
                return;
              }
              if (stderr) {
                console.error(`Errore nel file ${filePath}:`, stderr);
                return;

              }
              console.log(stdout)
            })
          }
        }
      });
    });
  });
}

// Trova i file con il formato {nome}.test.{js,ts} nella directory corrente (ricorsivamente)
findTestFiles(process.cwd());

