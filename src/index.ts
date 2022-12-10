import { BatchClient, SubmitJobCommand } from "@aws-sdk/client-batch";

const batchClient = new BatchClient({ region: "ap-northeast-1" });
const JOB_QUEUE = "takahara-fargate-job-queue";
const JOB_DEFINITION = "takahara-fargate-batch-task";

export const handler = async () => {
  const params = new SubmitJobCommand({
    jobName: new Date().toISOString(),
    jobQueue: JOB_QUEUE,
    jobDefinition: JOB_DEFINITION,
    parameters: { word: "AWS Bacth job!" },
  });
  return batchClient.send(params);
}
