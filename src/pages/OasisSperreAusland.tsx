import React from 'react';
import SchemaArticle from '../components/SchemaArticle';
import { Globe } from 'lucide-react';

export default function OasisSperreAusland() {
  return (
    <article className="max-w-4xl mx-auto">
      <SchemaArticle
        title="OASIS Sperre im Ausland - Internationale Wirksamkeit"
        description="Informationen zur Wirksamkeit der OASIS Spielersperre im Ausland. Erfahren Sie, wo die Sperre gilt und welche Alternativen es gibt."
        url="https://example.com/oasis-sperre-auch-im-ausland"
        datePublished="2024-03-14"
        imageUrl="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />

      <div className="mb-8">
        <div className="flex items-center justify-center mb-6">
          <Globe size={48} className="text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">OASIS Sperre im Ausland</h1>
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Internationale Spielersperre"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      </div>

      <div className="prose max-w-none">
        <p className="text-xl mb-6 text-gray-600">
          Die OASIS Spielersperre ist primär ein deutsches System. Hier erfahren Sie, wie die Sperre im Ausland funktioniert.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Geltungsbereich der OASIS Sperre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Deutschland</h3>
            <p>Vollständige Wirksamkeit bei allen lizenzierten Anbietern</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Ausland</h3>
            <p>Begrenzte Wirksamkeit, abhängig vom jeweiligen Land</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Internationale Zusammenarbeit</h2>
        <p className="mb-4">
          Einige Länder haben eigene Sperrsysteme, die teilweise mit OASIS kooperieren:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Österreich: Teilweise Anerkennung der Sperre</li>
          <li>Schweiz: Eigenes Sperrsystem</li>
          <li>Niederlande: CRUKS-System</li>
        </ul>

        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">Wichtige Hinweise</h3>
          <ul className="list-disc pl-6">
            <li>OASIS-Sperre gilt nicht automatisch im Ausland</li>
            <li>Separate Sperranträge können in anderen Ländern nötig sein</li>
            <li>Beachten Sie die lokalen Glücksspielgesetze</li>
          </ul>
        </div>
      </div>
    </article>
  );
}