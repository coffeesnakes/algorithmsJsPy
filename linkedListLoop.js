const findLoopEntry = (LinkedList) => {
  if (LinkedList.head === null || LinkedList.head.next === null) {
    return -1;
  }

  let slowRunner = LinkedList.head;
  let fastRunner = slowRunner;

  slowRunner = slowRunner.next;
  fastRunner = fastRunner.next.next;

  while (fastRunner && fastRunner.next && fastRunner !== slowRunner) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
  }

  if (fastRunner === slowRunner) {
    slowRunner = LinkedList.head;

    while (slowRunner !== fastRunner) {
      slowRunner = slowRunner.next;
      fastRunner = fastRunner.next;
    }
    return slowRunner;
  }
  return -1;
};

const findLoopLength = (LinkedList) => {
  const loopStart = findLoopEntry(LinkedList);
  if (loopStart !== -1) {
    let runner = loopStart.next;
    let count = 1;

    while (runner !== loopStart) {
      runner = runner.next;
      count++;
    }
    return count;
  }
  return -1;
};
