import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'haitran',
  authorAddress: 'hai@entest.io',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'cdk-cognito-userpool',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:entest-hai/cdk-cognito-userpool.git',

  peerDeps: ['aws-cdk-lib', 'constructs'],
  publishToPypi: {
    distName: 'cdk-cognito-userpool',
    module: 'cdk-cognito-userpool',
  },
});

const common_exclude = ['cdk.out', 'cdk.context.json'];
project.npmignore!.exclude(...common_exclude);
project.gitignore!.exclude(...common_exclude);

project.synth();
