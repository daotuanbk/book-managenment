import { Tag, Icon } from "antd";

const defaultTag = (isDefault: boolean) => {
  return !isDefault ? (<Tag color="magenta"><Icon type="close" /></Tag>) : (<Tag color="green"><Icon type="check" /></Tag>);
};

const activeTag = (isActive: boolean) => (
  <Tag color={isActive ? 'green' : 'red'}>
    {isActive ? 'Active' : 'In-Active'}
  </Tag>
);

export {
  defaultTag,
  activeTag,
}