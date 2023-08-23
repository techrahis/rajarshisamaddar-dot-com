import { MDXLayoutRenderer } from '@/components/MDXComponents';
import UsesLayout from '@/layouts/MDX/UsesLayout';
import MainLayout from '@/layouts/MainLayout';
import { allAuthors } from 'contentlayer/generated';

export const metadata = {
  title: 'Utilities - Rajarshi Samaddar',
  description: 'What I Use - Rajarshi Samaddar',
};

export default function Uses() {
  const author = allAuthors.find((p) => p.slug === 'utilities');

  if (!author) {
    return null;
  }

  return (
    <MainLayout>
      <UsesLayout>
        <MDXLayoutRenderer content={author} />
      </UsesLayout>
    </MainLayout>
  );
}
