# 中国高校列表（附官网）

这是一个 Node.js 项目，用于获取远程 URL 中的数据，解析并提取中国高校及其对应的官网 URL，数据将以 JSON 格式保存。

## 数据

[chinese_universities_with_website.json](./chinese_universities_with_website.json)

## 使用

### 前提条件

- Node.js（v14 或以上版本）
- npm（Node 包管理器）

### 安装运行

1. 将此存储库克隆到您的本地计算机。
2. 在项目目录中运行以下命令以安装所需的依赖项：

```bash
npm install
```

3. 要运行项目并从远程 URL 中获取数据，请使用以下命令：

```bash
npm start
```

该项目将获取数据，解析并在相同目录下创建名为 `chinese_universities_with_website.json` 的 JSON 文件。

## 输出

JSON 文件的数据格式如下：

```json
{
  "城市1": {
    "大学1": "https://university1.com",
    "大学2": "https://university2.com"
    // 根据数据，添加城市1的更多大学
  },
  "城市2": {
    "大学3": "https://university3.com",
    "大学4": "https://university4.com"
    // 根据数据，添加城市2的更多大学
  }
  // 根据数据，添加更多城市和大学
}
```

## 许可证

本项目基于 MIT 许可证授权。有关详情，请查阅 [LICENSE](LICENSE) 文件。

## 致谢

* 本项目数据来自 [DiamonWoo/Laosheng.top](https://github.com/DiamonWoo/Laosheng.top) 的 [yuanxiao.md](https://github.com/DiamonWoo/Laosheng.top/blob/master/fuwu/yuanxiao.md) 文件。
* 本项目使用 [cheerio](https://github.com/cheeriojs/cheerio) 库进行 HTML 内容解析。

## 作者

- [lcandy2](https://github.com/lcandy2)


---


# Chinese Universities with Website

This is a Node.js project that fetches data from a remote URL, parses it, and extracts Chinese universities with their corresponding website URLs. The data is then saved in JSON format.

## Data(Chinese)

[chinese_universities_with_website.json](./chinese_universities_with_website.json)

## Using the Project

### Prerequisites

- Node.js (v14 or above)
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine.
2. Install the required dependencies by running the following command in the project directory:

```bash
npm install
```

3. To run the project and fetch data from the remote URL, use the following command:

```bash
npm start
```

The project will fetch the data, parse it, and create a JSON file named `chinese_universities_with_website.json` in the same directory.

## Output

The JSON file will contain data in the following format:

```json
{
  "City 1": {
    "University 1": "https://university1.com",
    "University 2": "https://university2.com"
    // Add more universities for City 1 if available
  },
  "City 2": {
    "University 3": "https://university3.com",
    "University 4": "https://university4.com"
    // Add more universities for City 2 if available
  }
  // Add more cities and universities as per the data
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

* The data for this project is sourced from the [yuanxiao.md](https://github.com/DiamonWoo/Laosheng.top/blob/master/fuwu/yuanxiao.md) file of [DiamonWoo/Laosheng.top](https://github.com/DiamonWoo/Laosheng.top).
* This project uses the [cheerio](https://github.com/cheeriojs/cheerio) library to parse HTML content.

## Author

- [lcandy2](https://github.com/lcandy2)